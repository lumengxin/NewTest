package com.example.newtest;

import ohos.aafwk.content.Intent;
import ohos.ace.ability.AceAbility;
import ohos.agp.window.service.WindowManager;

public class MainAbility extends AceAbility {
    @Override
    public void onStart(Intent intent) {
        setInstanceName("splashscreen");
        super.onStart(intent);
        this.getWindow().addWindowFlags(WindowManager.LayoutConfig.MARK_FULL_SCREEN);
    }

    @Override
    public void onStop() {
        super.onStop();
    }
}
