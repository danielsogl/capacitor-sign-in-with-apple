import { WebPlugin } from '@capacitor/core';
import { SignInWithApplePlugin } from './definitions';
export declare class SignInWithAppleWeb extends WebPlugin implements SignInWithApplePlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const SignInWithApple: SignInWithAppleWeb;
export { SignInWithApple };
