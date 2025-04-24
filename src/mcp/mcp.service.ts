import { Injectable } from '@nestjs/common';
import { MCPStrategy } from './mcp.interface';
import { CopilotFetchWather } from './tools/copilot.fetch-Wather';

@Injectable()
export class McpService {
    private strategies: Record<string, MCPStrategy> = {
        copilot: new CopilotFetchWather(),
        // Agrega aquí más estrategias (gpt, mistral, etc.)
    };

    async process(provider: string, prompt: string): Promise<any> {
        const strategy = this.strategies[provider];
        if (!strategy) {
            throw new Error(`Proveedor '${provider}' no está soportado`);
        }

        return strategy.run(prompt);
    }
}
