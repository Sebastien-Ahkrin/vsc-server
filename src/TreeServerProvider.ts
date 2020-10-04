import { TreeDataProvider, TreeItem, TreeItemCollapsibleState } from 'vscode';

export class TreeServerProvider implements TreeDataProvider<ServerItem> {
 
  public getTreeItem(item: ServerItem): TreeItem {
    return item;
  }

  public getChildren(element: ServerItem): ServerItem[] {
    return [
      new ServerItem('Hello 1', TreeItemCollapsibleState.None),
      new ServerItem('Hello 2', TreeItemCollapsibleState.None)
    ];
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