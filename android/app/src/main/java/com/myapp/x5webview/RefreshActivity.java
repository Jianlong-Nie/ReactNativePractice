package com.myapp.x5webview;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

import com.myapp.R;


public class RefreshActivity extends Activity {
	X5WebView webView;
	TextView title;
	
	/**
	 * 此类实现了下拉刷新，
	 * 使用extension interface将会准确回去overScroll的时机
	 * 
	 */
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.refresh_layout);
		webView=(X5WebView)findViewById(R.id.web_filechooser);
		title = (TextView) findViewById(R.id.refreshText);
		webView.setTitle(title);
//		webView.loadUrl("http://app.html5.qq.com/navi/index");
		this.initBtn();
	}
	
	private void initBtn(){
	}
}
