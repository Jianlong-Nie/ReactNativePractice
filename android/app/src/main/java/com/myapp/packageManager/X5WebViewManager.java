package com.myapp.packageManager;

import android.content.Context;
import android.net.Uri;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.JavascriptInterface;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.myapp.x5webview.WebViewJavaScriptFunction;
import com.myapp.x5webview.X5WebView;
import com.tencent.smtt.export.external.interfaces.IX5WebChromeClient;
import com.tencent.smtt.export.external.interfaces.JsResult;
import com.tencent.smtt.export.external.interfaces.WebResourceRequest;
import com.tencent.smtt.export.external.interfaces.WebResourceResponse;
import com.tencent.smtt.sdk.CookieSyncManager;
import com.tencent.smtt.sdk.DownloadListener;
import com.tencent.smtt.sdk.ValueCallback;
import com.tencent.smtt.sdk.WebChromeClient;
import com.tencent.smtt.sdk.WebSettings;
import com.tencent.smtt.sdk.WebView;
import com.tencent.smtt.sdk.WebViewClient;


/**
 * Created by bill on 2017/8/31.
 */

public class X5WebViewManager extends SimpleViewManager<X5WebView> {
    @Override
    public String getName() {
        return "X5WebView";
    }

    @Override
    protected X5WebView createViewInstance(ThemedReactContext reactContext) {
        return initWebView(reactContext);
//        return new WebView(reactContext);
    }

    private X5WebView initWebView(final ThemedReactContext context) {
        X5WebView mWebView = new X5WebView(context);
        X5WebView.setSmallWebViewEnabled(true);
        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return false;
            }

            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view,
                                                              WebResourceRequest request) {
                // TODO Auto-generated method stub
                Log.e("should", "request.getUrl().toString() is " + request.getUrl().toString());
                return super.shouldInterceptRequest(view, request);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);

                WritableMap params = Arguments.createMap();
                params.putInt("finish", 0);
                context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit("message", params);
            }
        });

        mWebView.setWebChromeClient(new WebChromeClient() {
            View myVideoView;
            View myNormalView;
            IX5WebChromeClient.CustomViewCallback callback;

            /**
             * 全屏播放配置
             */
            @Override
            public void onShowCustomView(View view, IX5WebChromeClient.CustomViewCallback customViewCallback) {
//                FrameLayout normalView = (FrameLayout) context.findViewById(R.id.web_filechooser);
//                ViewGroup viewGroup = (ViewGroup) normalView.getParent();
//                viewGroup.removeView(normalView);
//                viewGroup.addView(view);
//                myVideoView = view;
//                myNormalView = normalView;
//                callback = customViewCallback;
            }

            @Override
            public void onHideCustomView() {
                if (callback != null) {
                    callback.onCustomViewHidden();
                    callback = null;
                }
                if (myVideoView != null) {
                    ViewGroup viewGroup = (ViewGroup) myVideoView.getParent();
                    viewGroup.removeView(myVideoView);
                    viewGroup.addView(myNormalView);
                }
            }

            @Override
            public boolean onShowFileChooser(WebView arg0,
                                             ValueCallback<Uri[]> arg1, FileChooserParams arg2) {
                // TODO Auto-generated method stub
                Log.e("app", "onShowFileChooser");
                return super.onShowFileChooser(arg0, arg1, arg2);
            }

            @Override
            public void openFileChooser(ValueCallback<Uri> uploadFile, String acceptType, String captureType) {
            }

            @Override
            public boolean onJsAlert(WebView arg0, String arg1, String arg2, JsResult arg3) {
                /**
                 * 这里写入你自定义的window alert
                 */
                return super.onJsAlert(null, "www.baidu.com", "aa", arg3);
            }

            /**
             * 对应js 的通知弹框 ，可以用来实现js 和 android之间的通信
             */
            @Override
            public void onReceivedTitle(WebView arg0, final String arg1) {
                super.onReceivedTitle(arg0, arg1);

            }
        });
        mWebView.setDownloadListener(new DownloadListener() {

            @Override
            public void onDownloadStart(String arg0, String arg1, String arg2,
                                        String arg3, long arg4) {
            }
        });

        WebSettings webSetting = mWebView.getSettings();
        webSetting.setAllowFileAccess(true);
        webSetting.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NARROW_COLUMNS);
        webSetting.setSupportZoom(true);
        webSetting.setBuiltInZoomControls(true);
        webSetting.setUseWideViewPort(true);
        webSetting.setLoadWithOverviewMode(true);
        webSetting.setSupportMultipleWindows(false);
        webSetting.setAppCacheEnabled(true);
        webSetting.setDatabaseEnabled(true);
        webSetting.setDomStorageEnabled(true);
        webSetting.setJavaScriptEnabled(true);
        webSetting.setGeolocationEnabled(true);
        webSetting.setAppCacheMaxSize(Long.MAX_VALUE);

//        webSetting.setAppCachePath(this.getDir("appcache", 0).getPath());
//        webSetting.setDatabasePath(this.getDir("databases", 0).getPath());
//        webSetting.setGeolocationDatabasePath(this.getDir("geolocation", 0)
//                .getPath());
        // webSetting.setPageCacheCapacity(IX5WebSettings.DEFAULT_CACHE_CAPACITY);
        webSetting.setPluginState(WebSettings.PluginState.ON_DEMAND);
        //webSetting.setRenderPriority(WebSettings.RenderPriority.HIGH);
        // webSetting.setPreFectch(true);

//        mWebView.loadUrl("https://w.cotte.cn/3d/");
//        mWebView.loadUrl("http://www.baidu.com");
        CookieSyncManager.createInstance(context);
        CookieSyncManager.getInstance().sync();
        mWebView.addJavascriptInterface(new WebViewJavaScriptFunction() {
            @Override
            public void onJsFunctionCalled(String tag) {

            }

            @JavascriptInterface
            public void postMessageToParent(String json) {
                WritableMap params = Arguments.createMap();
                params.putString("data", json);
                context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit("message", params);
            }

            @JavascriptInterface
            public void postSelectedPart(String json) {
            }

            @JavascriptInterface
            public void showMask() {
            }

            @JavascriptInterface
            public void hideMask() {
            }

            /**
             * 返回图片截图
             */
            @JavascriptInterface
            public void capture(String imageBase) {
            }

        }, "jsObj");

//        WritableMap params = Arguments.createMap();
////        params.putString("data",tag);
//        params.putInt("unread", 5);
//        context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
//                .emit("message", params);
        return mWebView;
    }

    @ReactProp(name = "url")
    public void loadUrl(X5WebView webView, @Nullable String url) {
        Log.e("000", url);
        webView.loadUrl(url);
    }

    @ReactMethod
    public void onMessage(Callback callback) {

    }
}
