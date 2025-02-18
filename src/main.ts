import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? 10091;
  const host = configService.get<string>('HOST') ?? '0.0.0.0';

  await app.listen(port, host);
  console.log(`Server running on http://${host}:${port}`);
}

bootstrap();
