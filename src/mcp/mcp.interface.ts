export interface MCPStrategy {
    run(prompt: string): Promise<any>;
  }
  