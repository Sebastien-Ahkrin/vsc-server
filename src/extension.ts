import { ExtensionContext, workspace, window } from 'vscode';
import { TreeServerProvider } from './TreeServerProvider';

export function activate(context: ExtensionContext) {
	const paths = workspace.workspaceFolders;
	if (paths !== undefined) {
		window.registerTreeDataProvider('serverView', new TreeServerProvider(paths[0].uri.fsPath));
	}
}

export function deactivate() {}
