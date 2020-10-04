import { ExtensionContext, commands, window } from 'vscode';

interface Command {
	command: string,
	action: () => void;
}

function register(context: ExtensionContext, command: Command): void {
	const cmd = commands.registerCommand(command.command, command.action);
	context.subscriptions.push(cmd);
}

export function activate(context: ExtensionContext) {
	console.log('Congratulations, your extension "vsc-server" is now active!');

	register(context, {
		command: 'vsc-server.helloWorld',
		action: () => {
			window.showInformationMessage("Hello, World!");
		}
	});
}

export function deactivate() {}
