package com.myapp;

import android.app.Application;

import com.cboy.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.react.ReactApplication;
import com.brentvatne.react.ReactVideoPackage;
import com.rnfs.RNFSPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.microsoft.codepush.react.CodePush;
import com.myapp.packageManager.X5WebViewPackage;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

//import cn.qiuxiang.react.amap3d.AMap3DPackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Nullable
        @Override
        protected String getBundleAssetName() {
            return "index.android.bundle";
        }

        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }


        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }


        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new ReactVideoPackage(),
                    new RNFSPackage(),
                    new RNSpinkitPackage(),
                    new AMap3DPackage(),
                    new SplashScreenReactPackage(),
                    new X5WebViewPackage(),
                    new CodePush(BuildConfig.CODEPUSH_KEY, MainApplication.this, BuildConfig.DEBUG),
                    new RCTCameraPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this,  false);///* native exopackage */
    }
}
