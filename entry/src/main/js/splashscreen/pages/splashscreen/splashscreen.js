import app from '@system.app';

var timeoutID;
var intervalID;
var skipTime = 3;

export default {
    data: {
        "skip": "",
        "ads": "",
        "app_name": "",
        "copyright": ""
    },
    onInit() {
        this.skip = this.$t('strings.skip');
        this.ads = this.$t('strings.ads');
        this.app_name = this.$t('strings.app_name');
        this.copyright = this.$t('strings.copyright');
        this.timeout();
    },
    async timeout() {
        let that = this;
        intervalID = setInterval(function () {
            that.skip = that.skip.slice(0, -1) + skipTime;
            skipTime -= 1;
        }, 1000);
        timeoutID = setTimeout(function () {
            clearTimeout(timeoutID);
            clearInterval(intervalID);
            that.navigate();
        }, 4000);
    },
    async skipButtonClicked() {
        clearTimeout(timeoutID);
        clearInterval(intervalID);
        this.navigate();
    },
    async navigate() {
        let target = {
            bundleName: "com.example.newtest",
            abilityName: "com.example.newtest.SplashScreenAbility",
            data: {},
            flag: 276826112
        };
        FeatureAbility.startAbility(target);
        app.terminate();
    }
}
