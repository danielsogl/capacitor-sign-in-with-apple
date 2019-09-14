
  Pod::Spec.new do |s|
    s.name = 'CapacitorSignInWithApple'
    s.version = '0.0.1'
    s.summary = 'The fast, easy way to sign in to apps and websites'
    s.license = 'MIT'
    s.homepage = 'https://github.com/danielsogl/capacitor-sign-in-with-apple'
    s.author = 'Daniel Sogl'
    s.source = { :git => 'https://github.com/danielsogl/capacitor-sign-in-with-apple', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end