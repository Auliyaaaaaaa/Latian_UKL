import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { PrismaService } from '../prisma/prisma.service'; // ✅ tambahkan ini

@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService, PrismaService], // ✅ tambahkan PrismaService
})
export class AttendanceModule {}
