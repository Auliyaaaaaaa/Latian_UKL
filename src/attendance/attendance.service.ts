import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';

@Injectable()
export class AttendanceService {
    constructor(private prisma: PrismaService) { }

    // 🟢 Tambah presensi
    async create(data: CreateAttendanceDto) {
        const attendance = await this.prisma.attendance.create({
            data: {
                userId: data.user_id,
                date: new Date(`${data.date}T${data.time}`), // simpan sebagai datetime
                status: data.status,
            },
        });

        return {
            status: 'success',
            message: 'Presensi berhasil dicatat',
            data: {
                attendance_id: attendance.id,
                user_id: attendance.userId,
                date: data.date,
                time: data.time,
                status: attendance.status,
            },
        };
    }

    // 🟡 Lihat riwayat presensi user
    async findHistory(userId: number) {
        const records = await this.prisma.attendance.findMany({
            where: { userId },
            orderBy: { date: 'desc' },
        });

        return {
            status: 'success',
            message: 'Riwayat presensi berhasil diambil',
            data: records.map((r) => ({
                attendance_id: r.id,
                user_id: r.userId,
                date: r.date.toISOString().split('T')[0],
                time: r.date.toISOString().split('T')[1].substring(0, 8), // Extract time part HH:MM:SS
                status: r.status,
            })),
        };
    }

    // 🟠 Rekap bulanan
    async findSummary(userId: number, month: number, year: number) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);

        const records = await this.prisma.attendance.findMany({
            where: {
                userId,
                date: { gte: startDate, lte: endDate },
            },
        });

        const totalDays = records.length;
        const presentDays = records.filter((r) => r.status === 'hadir').length;
        const absentDays = records.filter((r) => r.status === 'absen').length;
        const lateDays = records.filter((r) => r.status === 'terlambat').length;

        return {
            status: 'success',
            message: 'Rekap bulanan berhasil diambil',
            data: { month, year, totalDays, presentDays, absentDays, lateDays },
        };
    }

    // 🔵 Analisis kehadiran
    async analyze(userId: number) {
        const all = await this.prisma.attendance.findMany({ where: { userId } });

        if (all.length === 0) {
            return {
                status: 'failed',
                message: 'Belum ada data presensi',
                data: {},
            };
        }

        const presentRatio =
            (all.filter((a) => a.status === 'hadir').length / all.length) * 100;

        let performance = 'Baik';
        if (presentRatio < 80) performance = 'Perlu diperbaiki';
        if (presentRatio < 50) performance = 'Buruk';

        return {
            status: 'success',
            message: 'Analisis kehadiran berhasil dihitung',
            data: {
                userId,
                totalRecords: all.length,
                presentRatio: `${presentRatio.toFixed(2)}%`,
                performance,
            },
        };

    }
};

