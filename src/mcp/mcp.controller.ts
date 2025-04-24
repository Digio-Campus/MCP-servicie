import { Controller, Post, Body } from '@nestjs/common';
import { McpService } from './mcp.service';

@Controller()
export class McpController {
    constructor(private mcpService: McpService) {
        this.mcpService = mcpService;
    }
    @Post('/mcp')
    async handleMCP(@Body() body: { provider: string; prompt: string }) {
        return this.mcpService.process(body.provider, body.prompt);
    }

}
