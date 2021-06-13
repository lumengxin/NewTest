package com.example.newtest;

import ohos.ace.ability.AceAbility;
import ohos.aafwk.content.Intent;
import ohos.agp.window.service.WindowManager;

public class SplashScreenAbility extends AceAbility {
    @Override
    public void onStart(Intent intent) {
        setInstanceName("default");
        super.onStart(intent);
        this.getWindow().addWindowFlags(WindowManager.LayoutConfig.MARK_FULL_SCREEN);
    }

    @Override
    public void onStop() {
        super.onStop();
    }
}
