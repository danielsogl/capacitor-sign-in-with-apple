declare module "@capacitor/core" {
  interface PluginRegistry {
    SignInWithApple: SignInWithApplePlugin;
  }
}

export interface SignInWithApplePlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
