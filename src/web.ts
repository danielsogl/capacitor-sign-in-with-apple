import { WebPlugin } from '@capacitor/core';
import { SignInWithApplePlugin } from './definitions';

export class SignInWithAppleWeb extends WebPlugin implements SignInWithApplePlugin {
  constructor() {
    super({
      name: 'SignInWithApple',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const SignInWithApple = new SignInWithAppleWeb();

export { SignInWithApple };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SignInWithApple);
