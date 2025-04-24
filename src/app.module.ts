import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { McpModule } from './mcp/mcp.module';
import { McpController } from './mcp/mcp.controller';

@Module({
  imports: [McpModule],
  controllers: [AppController],
  
})
export class AppModule {}
