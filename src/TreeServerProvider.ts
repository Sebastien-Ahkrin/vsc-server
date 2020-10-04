import { TreeDataProvider, TreeItem, TreeItemCollapsibleState, window, WorkspaceFolder } from 'vscode';
import { promises as fs } from 'fs';
import { join } from 'path';

export class TreeServerProvider implements TreeDataProvider<ServerItem> {
 
  public constructor(private workspace: string) {}

  public getTreeItem(item: ServerItem): TreeItem {
    return item;
  }

  public async getChildren(): Promise<Array<ServerItem>> {
    try {
      return Object.keys(await this.getScripts()).map((script) => {
        return new ServerItem(script, TreeItemCollapsibleState.None);
      });
    } catch (error) {
      window.showInformationMessage('Cannot find package.json file');
      return [];
    }
  }

  private async getScripts() {
    const result = await fs.readFile(join(this.workspace, 'package.json'), { encoding: 'utf-8' });
    const json = JSON.parse(result);

    return json.scripts || [];
  }

}

export class ServerItem extends TreeItem {

  constructor(
    public readonly label: string,
    public readonly collapsibleState: TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
  }

}