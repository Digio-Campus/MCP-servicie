import { MCPStrategy } from '../mcp.interface';
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

export class CopilotStrategy implements MCPStrategy {
  private server: McpServer;

  constructor() {
    this.server = new McpServer({
      name: "CopilotDemo",
      version: "1.0.0"
    });

    // Puedes definir múltiples herramientas aquí
    this.server.tool(
      "fetch-weather",
      "Tool to fetch the weather of a city",
      {
        city: z.string().describe("City name"),
      },
      async ({ city }) => ({
        content: [
          {
            type: "text",
            text: `The weather in ${city} is sunny with a temperature of 25°C.`,
          }
        ]
      })
    );

    // Iniciar el servidor MCP
    this.bootstrap();
  }

  private async bootstrap() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }

  async run(prompt: string): Promise<any> {
    // Esto puede integrarse con un LLM para enviar prompts
    return {
      message: "Servidor Copilot está activo. Interfaz MCP lista.",
      prompt,
    };
  }
}
