import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get('/')
    getHello() {
        return 'Hello World! MCP Server is running.';
    }
}
