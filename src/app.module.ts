import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config/constents";
import { UsersModule } from "./users/users.module";
import { TimeReportModule } from "./time-report/time-report.module";
import { AuthModule } from './auth/auth.module';
import { AccessControlModule } from "nest-access-control";
import { roles } from "./app.roles";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true,
        logging: false,
      }),
      inject: [ConfigService],
    }),
    AccessControlModule.forRoles(roles),
    UsersModule,
    TimeReportModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
