function chinese() {
	button = document.getElementById("chinese_button");
	jp = '日语';
	ch = '中文';
	en = '英语';
	kr = '韩语';
	it = '意大利语';
	fr = '法语';
	ru = '俄语';
	tr = '土耳其语';
	
	button.style.display = "none";
	document.title = '散兵相关全收集网站'
	//記事トップ
	document.getElementsByClassName('title')[0].innerHTML = '散兵相关全收集网站（简体中文测试版）';
	document.getElementsByClassName('update-version')[0].innerHTML = '3.2版本前瞻特别节目';
	document.getElementsByClassName('about-this-site')[0].innerHTML = '这是散厨的散兵信息收集网站。没有内鬼。<br>浏览以下内容时，视为同意<a href="../agreement.html" class="black">使用条款（日语）</a>。<br><br>中文是测试版。为了进行准确的翻译和反馈，请通过<a href="https://www.twitter.com/messages/compose?recipient_id=1503015129603981315">推特</a>或<a href="mailto:boogie_county.06@icloud.com">邮件</a>联系。';
	document.getElementsByClassName('tweet')[0].innerHTML = '分享推特	&#x2009;&#x2009;';
	document.getElementsByClassName('copy')[0].innerHTML = '复制链接&#x2009;&#x2009;';
	
	document.getElementsByClassName('not-official')[0].innerHTML = '本网站是非官方的，不是COGNOSPHERE及上海米哈游網絡科技股份有限公司提供或合作。';
	document.getElementsByClassName('not-support')[0].innerHTML = '作者不能保证内容或翻译是正确的。不承担链接等责任，不应对用户遭受的所有损失。';
	document.getElementsByClassName('from-genshin')[0].innerHTML = '摘自《原神》(©︎上海米哈游網絡科技股份有限公司)';
	
	//メニュー
	document.getElementsByClassName('nav_label_text')[0].innerHTML = '菜单';
	document.getElementById('search-text').setAttribute('placeholder','搜索');
	document.getElementsByClassName('story-serch')[0].setAttribute('value','任务');
	document.getElementsByClassName('artifact-serch')[0].setAttribute('value','圣遗物');
	document.getElementsByClassName('kunikuzushi-serch')[0].setAttribute('value','国崩');
	document.getElementsByClassName('cheats-serch')[0].setAttribute('value','攻略');
	
	document.getElementsByClassName('update')[0].innerHTML = '更新记录';
	document.getElementsByClassName('information')[0].innerHTML = '基本信息';
	
	document.getElementsByClassName('character-setting')[0].innerHTML = '角色设定'
	document.getElementsByClassName('voice-actor')[0].innerHTML = '声优';
	//document.getElementsByClassName('gacha-Illust')[0].innerHTML = '立绘・抽卡立绘';
	document.getElementsByClassName('model')[0].innerHTML = '3D模型<span style="display: none;">3d</span>';
	//document.getElementsByClassName('gacha')[0].innerHTML = '抽卡';
	//document.getElementsByClassName('gacha-3.3')[0].innerHTML = '抽卡名';
	
	document.getElementsByClassName('timeline')[0].innerHTML = '年表';
	document.getElementsByClassName('world-name')[0].innerHTML = '所有语言的名字';
	
	//document.getElementsByClassName('jp')[0].innerHTML = jp;
	//document.getElementsByClassName('ch')[0].innerHTML = ch;
	//document.getElementsByClassName('en')[0].innerHTML = en;
	//document.getElementsByClassName('kr')[0].innerHTML = kr;
	//document.getElementsByClassName('it')[0].innerHTML = it;
	//document.getElementsByClassName('fr')[0].innerHTML = fr;
	//document.getElementsByClassName('ru')[0].innerHTML = ru;
	//document.getElementsByClassName('tr')[0].innerHTML = tr;
	document.getElementsByClassName('name-list')[0].innerHTML = '一览';
	
	
	document.getElementsByClassName('story-text')[0].innerHTML = '任务文本<span style="display: none;">(故事)</span>';
	document.getElementsByClassName('unreconciled-stars')[0].innerHTML = '未归的熄星<span style="display: none;">(活动，任务，故事，蒙德，璃月，菲谢尔，莫娜)</span>';
	document.getElementsByClassName('unknown-star')[0].innerHTML = '蔓延的危机';
	document.getElementsByClassName('star-of-deceitful-dreams')[0].innerHTML = '天之谜，水之解';
	document.getElementsByClassName('star-of-destiny')[0].innerHTML = '古星命定之地';
	
	document.getElementsByClassName('omnipresence-over-mortals')[0].innerHTML = '千手百眼，天下人间<span style="display: none;">(魔神任务，故事，八重神子，雷电将军，邪眼工厂，稻妻)</span>';
	document.getElementsByClassName('delusion')[0].innerHTML = '邪眼';
	document.getElementsByClassName('the-servants-path')[0].innerHTML = '眷属的践行';
	document.getElementsByClassName('wishes')[0].innerHTML = '愿望';
	
	document.getElementsByClassName('clean-house')[0].innerHTML = '门户清理<span style="display: none;">(世界任务，故事，稻妻)</span>';
	
	document.getElementsByClassName('labyrinth-warriors')[0].innerHTML = '谜境悬兵<span style="display: none;">(活动，任务，故事，稻妻，公子，达达利亚)</span>';
	document.getElementsByClassName('away-with-obsessions-and-falsehood')[0].innerHTML = '痴念虚错拂袖去';
	
	document.getElementsByClassName('hues-of-the-violet-garden')[0].innerHTML = '堇庭华彩<span style="display: none;">(活动，任务，故事，枫原万叶，稻妻，国崩)</span>';
	document.getElementsByClassName('five-kasen-summary')[0].innerHTML = '五歌仙资料汇总</span>';
	document.getElementsByClassName('a-new-painting-in-pale-scarlet')[0].innerHTML = '薄墨淡朱新绘';
	document.getElementsByClassName('the-palace-dyed-in-blackfalsehood')[0].innerHTML = '宵暗御所黑染';
	document.getElementsByClassName('tale-of-the-five-kasen')[0].innerHTML = '剧情PV-「歌仙逸话」<span style="display: none;">(pv，视频)</span>';
	
	document.getElementsByClassName('a-winter-nights-lazzo')[0].innerHTML = 'PV「冬夜愚戏」<span style="display: none;">(博士，多托雷，队长，卡皮塔诺，任务，故事，至冬、pv、视频)</span>';
	document.getElementsByClassName('through-mists-of-smoke-and-forests-dark')[0].innerHTML = '穿越烟帷与暗林<span style="display: none;">(魔神任务，故事，虚空，须弥)</span>';
	document.getElementsByClassName('ever-so-close')[0].innerHTML = '近在咫尺的目标';
	
	document.getElementsByClassName('the-morn-a-thousand-roses-brings')[0].innerHTML = '终将到来的花神诞祭<span style="display: none;">(魔神任务，故事，虚空，须弥)</span>';
	document.getElementsByClassName('unknown-voice-3-2')[0].innerHTML = '未知的声音';
	document.getElementsByClassName('the-coming-of-the-sabzeruz-festival')[0].innerHTML = '终将到来的花神诞祭';
	document.getElementsByClassName('the-end-of-the-sabzeruz-festival')[0].innerHTML = '终将结束的花神诞祭';
	
	document.getElementsByClassName('dreams-emptiness-deception')[0].innerHTML = '迷梦与空幻与欺骗<span style="display: none;">(魔神任务，故事，虚空，须弥，国崩，PV)</span>';
	document.getElementsByClassName('like-a-triumphant-hero')[0].innerHTML = '如凯旋的英雄一般';
	document.getElementsByClassName('the-gaze-from-a-certain-god')[0].innerHTML = '来自某位「神明」的凝视';
	document.getElementsByClassName('the-divine-will')[0].innerHTML = '剧情PV-「『神』意」<span style="display: none;">(PV、pv、视频)</span>';
	
	document.getElementsByClassName('king-deshret-and-the-three-magi')[0].innerHTML = '赤土之王与三朝圣者<span style="display: none;">(魔神任务，故事，虚空，须弥)</span>';
	document.getElementsByClassName('cry-from-the-eleazar-hospital')[0].innerHTML = '魔鳞病医院的哭声';
	document.getElementsByClassName('secret-of-the-scorching-desert')[0].innerHTML = '热沙中的秘密';
	
	//document.getElementsByClassName('truth-amongst-the-pages-of-purana')[0].innerHTML = '虚空劫灰往世书<span style="display: none;">(魔神任务，故事，虚空，须弥，虚空鼓动，劫火高扬)</span>';
	document.getElementsByClassName('akasha-pulses-the-kalpa-flame-rises')[0].innerHTML = '虚空鼓动，劫火高扬<span style="display: none;">(魔神任务，故事，虚空，须弥，BOSS，週本，虚空鼓动，劫火高扬)</span>';
	
	document.getElementsByClassName('boss')[0].innerHTML = '週本「？？？」<span style="display: none;">BOSS，敌人，攻略</span>';
	
	
	//タイトル
	document.getElementById('update').innerHTML = '更新记录';
	document.getElementById('information').innerHTML = '基本信息';
	
	document.getElementById('character-setting').innerHTML = '角色设定'
	document.getElementById('voice-actor').innerHTML = '声优';
	//document.getElementById('gacha-Illust')[0].innerHTML = '立绘・抽卡立绘';
	document.getElementById('model').innerHTML = '3D模型<span style="display: none;">3d</span>';
	//document.getElementById('gacha')[0].innerHTML = '抽卡';
	//document.getElementById('gacha-3.3')[0].innerHTML = '抽卡名';
	
	document.getElementById('timeline').innerHTML = '年表';
	document.getElementById('world-name').innerHTML = '所有语言的名字';
	
	document.getElementById('jp').innerHTML = jp;
	document.getElementById('ch').innerHTML = ch;
	document.getElementById('en').innerHTML = en;
	document.getElementById('kr').innerHTML = kr;
	document.getElementById('it').innerHTML = it;
	document.getElementById('fr').innerHTML = fr;
	document.getElementById('ru').innerHTML = ru;
	document.getElementById('tr').innerHTML = tr;
	document.getElementById('list').innerHTML = '一览';
	
	document.getElementById('story-text').innerHTML = '任务文本';
	document.getElementById('unreconciled-stars').innerHTML = '未归的熄星';
	document.getElementById('unknown-star').innerHTML = '蔓延的危机';
	document.getElementById('star-of-deceitful-dreams').innerHTML = '天之谜，水之解';
	document.getElementById('star-of-destiny').innerHTML = '古星命定之地';
	
	document.getElementById('omnipresence-over-mortals').innerHTML = '千手百眼，天下人间';
	document.getElementById('delusion').innerHTML = '邪眼';
	document.getElementById('the-servants-path').innerHTML = '眷属的践行';
	document.getElementById('wishes').innerHTML = '愿望';
	
	document.getElementById('clean-house').innerHTML = '门户清理';
	
	document.getElementById('labyrinth-warriors').innerHTML = '谜境悬兵';
	document.getElementById('away-with-obsessions-and-falsehood').innerHTML = '痴念虚错拂袖去';
	
	document.getElementById('hues-of-the-violet-garden').innerHTML = '堇庭华彩';
	document.getElementById('a-new-painting-in-pale-scarlet').innerHTML = '薄墨淡朱新绘';
	document.getElementById('the-palace-dyed-in-blackfalsehood').innerHTML = '宵暗御所黑染';
	document.getElementById('tale-of-the-five-kasen').innerHTML = '剧情PV-「歌仙逸话」';
	
	document.getElementById('a-winter-nights-lazzo').innerHTML = 'PV「冬夜愚戏」';
	
	document.getElementById('through-mists-of-smoke-and-forests-dark').innerHTML = '穿越烟帷与暗林';
	document.getElementById('ever-so-close').innerHTML = '近在咫尺的目标';
	
	document.getElementById('the-morn-a-thousand-roses-brings').innerHTML = '千朵玫瑰带来的黎明';
	document.getElementById('unknown-voice-3-2').innerHTML = '未知的声音';
	document.getElementById('the-coming-of-the-sabzeruz-festival').innerHTML = '终将到来的花神诞祭';
	document.getElementById('the-end-of-the-sabzeruz-festival').innerHTML = '终将结束的花神诞祭';
	
	document.getElementById('dreams-emptiness-deception').innerHTML = '迷梦与空幻与欺骗';
	document.getElementById('like-a-triumphant-hero').innerHTML = '如凯旋的英雄一般';
	document.getElementById('the-gaze-from-a-certain-god').innerHTML = '来自某位「神明」的凝视';
	document.getElementById('the-divine-will').innerHTML = '剧情PV-「『神』意」';
	
	document.getElementById('king-deshret-and-the-three-magi').innerHTML = '赤土之王与三朝圣者';
	document.getElementById('cry-from-the-eleazar-hospital').innerHTML = '魔鳞病医院的哭声';
	document.getElementById('secret-of-the-scorching-desert').innerHTML = '热沙中的秘密';
	document.getElementById('akasha-pulses-the-kalpa-flame-rises').innerHTML = '虚空鼓动，劫火高扬';
	//document.getElementById('truth-amongst-the-pages-of-purana').innerHTML = '虚空劫灰往世书';
	
	
	document.getElementById('pale-flame').innerHTML = '苍白之火';
	document.getElementById('goblet-of-eonothem-surpassing-cup').innerHTML = '超越之盏';
	document.getElementById('husk-of-opulent-dreams').innerHTML = '华馆梦醒形骸记';
	document.getElementById('bloom-times').innerHTML = '荣花之期';
	document.getElementById('plume-of-luxury').innerHTML = '华馆之羽';
	document.getElementById('song-of-life').innerHTML = '众生之谣';
	document.getElementById('calabash-of-awakening').innerHTML = '梦醒之瓢';
	document.getElementById('skeletal-hat').innerHTML = '形骸之笠';
	
	
	document.getElementById('boss').innerHTML = '週本「？？？」';
	document.getElementById('boss-story').innerHTML = '秘境・故事';
	document.getElementById('boss-detail').innerHTML = '秘境详情';
	document.getElementById('boss-stage1').innerHTML = '第一形态: ？？？';
	document.getElementById('boss-stage2').innerHTML = '第ニ形态: ？？？';
	document.getElementById('boss-drop').innerHTML = '素材';
	
	//タブ
	document.getElementsByClassName('top-tab-scaramouche')[0].innerHTML = '「散兵」';
	document.getElementsByClassName('top-tab-kuronushi')[0].innerHTML = '黑主';
	document.getElementsByClassName('top-tab-old-style')[0].innerHTML = '以前的样子';
	document.getElementsByClassName('top-tab-boss')[0].innerHTML = '週本';

	//更新履歴
	document.getElementsByClassName('update-10')[0].innerHTML = '<span class="ver-num">1.0版本</span>每日委托「等量交换」';
	document.getElementsByClassName('update-11')[0].innerHTML = '<span class="ver-num">1.1版本</span>活动「未归的熄星」';
	document.getElementsByClassName('update-14')[0].innerHTML = '<span class="ver-num">1.4版本</span>新圣遗物「苍白之火」';
	document.getElementsByClassName('update-20')[0].innerHTML = '<span class="ver-num">2.0版本</span>「古い手帳」，秘境「借景之馆，武器「桂木斩长正」';
	document.getElementsByClassName('update-21')[0].innerHTML = '<span class="ver-num">2.1版本</span>第二章第三幕「千手百眼，天下人间」，提及「雷电将军」';
	document.getElementsByClassName('update-22')[0].innerHTML = '<span class="ver-num">2.2版本</span>活动「谜境悬兵」，世界任务「门户清理」';
	document.getElementsByClassName('update-23')[0].innerHTML = '<span class="ver-num">2.3版本</span>新圣遗物「华馆梦醒形骸记」';
	document.getElementsByClassName('update-25')[0].innerHTML = '<span class="ver-num">2.5版本</span>提及「八重神子」';
	document.getElementsByClassName('update-26')[0].innerHTML = '<span class="ver-num">2.6版本</span>活动「堇庭华彩」';
	document.getElementsByClassName('update-220711')[0].innerHTML = '<span class="ver-num">2022/7/11</span>PV「冬夜愚戏」上网';
	document.getElementsByClassName('update-28')[0].innerHTML = '<span class="ver-num">2.8版本</span>提及「达达利亚」、新武器「『妖刀』」';
	document.getElementsByClassName('update-30')[0].innerHTML = '<span class="ver-num">3.0版本</span>第三章第一幕「穿越烟帷与暗林」，第三章第二幕「千朵玫瑰带来的黎明」';
	document.getElementsByClassName('update-31')[0].innerHTML = '<span class="ver-num">3.1版本</span>第三章第三幕「迷梦与空幻与欺骗」，第三章第四幕「赤土之王与三朝圣者」';
	document.getElementsByClassName('update-221004')[0].innerHTML = '<span class="ver-num">PV「『神』意」上网';
	document.getElementsByClassName('update-32')[0].innerHTML = '<span class="ver-num">3.2版本</span>第三章第五幕<!--「迷梦与空幻与欺骗」-->，新週本「？？？」';
	
	//基本情報
		document.getElementsByClassName('name-fatui-no6')[0].innerHTML = '愚人众执行官第六席「散兵」斯卡拉姆齐';
		document.getElementsByClassName('name-kunikuzushi')[0].innerHTML = '国崩';
		document.getElementsByClassName('gods')[0].innerHTML = '？？？';
		document.getElementsByClassName('release-boss-version')[0].innerHTML = '週本: 3.2版本';
		document.getElementsByClassName('release-playable-version')[0].innerHTML = '进卡池: 3.3版本以降';
		
		document.getElementsByClassName('elemental')[0].innerHTML = '元素';
		document.getElementsByClassName('elemental-breakdown')[0].innerHTML = '雷';
		document.getElementsByClassName('elemental-robot')[0].innerHTML = '元素（机器）';
		document.getElementsByClassName('elemental-robot-reakdown')[0].innerHTML = '雷、风、水、火、冰';
		document.getElementsByClassName('vision')[0].innerHTML = '神之眼';
		document.getElementsByClassName('vision-breakdown')[0].innerHTML = '?';
		document.getElementsByClassName('age')[0].innerHTML = '年龄';
		document.getElementsByClassName('age-breakdown')[0].innerHTML = '未满500岁';
		document.getElementsByClassName('from-country')[0].innerHTML = '出身';
		document.getElementsByClassName('from-country-breakdown')[0].innerHTML = '稻妻';
		document.getElementsByClassName('ethnicity')[0].innerHTML = '种族';
		document.getElementsByClassName('ethnicity-breakdown')[0].innerHTML = '人偶';
		document.getElementsByClassName('constellation')[0].innerHTML = '命之座';
		document.getElementsByClassName('life-collection')[0].innerHTML = '?';
		document.getElementsByClassName('birthday')[0].innerHTML = '生日';
		document.getElementsByClassName('birthday-breakdown')[0].innerHTML = '?';
		document.getElementsByClassName('character-title')[0].innerHTML = '称号';
		document.getElementsByClassName('character-title-breakdown')[0].innerHTML = '?';
		document.getElementsByClassName('god-name')[0].innerHTML = '神名';
		document.getElementsByClassName('god-name-breakdown')[0].innerHTML = '？？？';
		
		document.getElementsByClassName('va-jp')[0].innerHTML = jp;
		document.getElementsByClassName('va-cn')[0].innerHTML = ch;
		document.getElementsByClassName('va-en')[0].innerHTML = en;
		document.getElementsByClassName('va-kr')[0].innerHTML = kr;
		
		
		document.getElementsByClassName('kakihara-tetuya')[0].innerHTML = '柿原彻也';
		document.getElementsByClassName('lu-an')[0].innerHTML = '鹿暗';
		document.getElementsByClassName('patrick')[0].innerHTML = 'Patrick Pedraza';
		document.getElementsByClassName('min-seung-woo')[0].innerHTML = '민승우（閔丞釪）';
		
		//3Dモデル
		document.getElementById('3dmodel_scaramouche_button').innerHTML = '读取高画质图像';
		document.getElementsByClassName('cant-load-twitter-photo-link')[0].innerHTML = '查看附件图片(无法访问推特)：<a href="https://cdn-ak.f.st-hatena.com/images/fotolife/n/neutron-star/20220805/20220805040312">散兵模型</a>';
		
		//帰らぬ熄星
		document.getElementsByClassName('unknown-star-text')[0].innerHTML = '<p>派蒙 : 地上这个人是睡着了吗？<br>？？？ : 恐怕是的。我用了很多办法，也没能叫醒他。<br>派蒙 : 看来，他也摸了这里的陨石…<br>？？？ : 是说车上那块石头吗？不必担心，我用法术处理掉了。<br>？？？ : 你刚才说「也」的意思是，你们见过其他陷入沉睡的人？<br>菲谢尔 : 本皇女的断罪之眼亲眼见证了梦魇从魔骸之谷涌出，清泉镇居民深受其害，正在痛苦中辗转。<br>奥兹 : 如您所见，我们刚从其他地方过来。蒙德也有不少人长睡不醒，症状和这位先生一模一样。<br>？？？ : 这样啊…看来，陨石造成的影响不小。<br>派蒙 : 看打扮，这个人就是晨曦酒庄的工人…我们已经见过本了，那他就是弗里茨吧！<br>奥兹 : 工人的衣着可没有太多特征，派蒙阁下眼力真好。<br>派蒙 : 我的记性比眼力更好！不过，确实是没什么特征呢…尤其对比身旁这位。<br>？？？ : 哈哈，我吗？<br>派蒙 : 是啊，我还是头一次见到你这种打扮呢。<br>旅行者 : 帽子很大，很有个性。<br>？？？ : 我是来自稻妻的浮浪人。刚才我正在救助地上这位先生，你们就出现了。<br>？？？ : 几位是在调查陨石事件吗？<br>派蒙 : 我们是受人所托。<br>菲谢尔 : 我乃断罪的皇女菲谢尔，应民众的呼唤挺身而出！<br>奥兹 : 我是小姐的眷属夜鸦，奥兹。<br>派蒙 : 我是西风骑士团荣誉骑士最好的朋友，派蒙！<br>？？？ : 哦？那你就是西风骑士团的荣誉骑士了。<br>旅行者 : 我确实是荣誉骑士。<br>菲谢尔 : 皇女已经出征，期待吧，昭告命运的圣裁之雷将会肃清这卷携灾厄的噩梦之种！<br>？？？ : 呃…呃…？<br>派蒙 : 别介意，她就是这个风格。<br>旅行者 : 菲谢尔是个很热心的好人呢。<br>千岩軍NPC : 各位，发生什么事了吗？<br>派蒙 : 是千岩军！来得正好，这里有睡着的人！<br>？？？ : 既然有千岩军，这里就不需要我了。<br>？？？ : 很高兴认识你们。我还有事要办，先走一步。<br>？？？ : 祝你们一切顺利，冒险家们。<br>派蒙 : 再见！</p>';
		document.getElementsByClassName('star-of-destiny-text')[0].innerHTML = '<p>莫娜 : 哦？这就是从前的尖帽子峰吗？变得好小呢。<br>派蒙 : 哎，有人先到了？这里是什么观光景点吗？<br>派蒙 : 啊！是你！<br>散兵 : 唔…嗯？是你们？<br>旅行者 : 你是刚睡醒吗？<br>派蒙 : 他这个样子，难道是刚从梦境里出来？<br>莫娜 : 竟然有人能凭自己的力量苏醒过来…怎么可能？<br>散兵 : 哼，你们做不到，不代表我也做不到。<br>散兵 : 你们来晚了一步，我的「研究」已经完成了。<br>派蒙 : 果然这一切都是你们愚人众搞的花样吗？！<br>散兵 : 别那么紧张，我今天没时间陪你们玩。下回再找你的麻烦也不迟。<br>旅行者 : 等等！你到底有什么目的！<br>莫娜 : 你刚才进入了那个众人共通的雪山梦境吧？你对莱纳德的事知道多少？<br>散兵 : 莱纳德？什么莱纳德…哼，不管了，现在可不是关心杂鱼的时候。<br>散兵 : 我发现了…更可怕、更重要的事呀。<br>派蒙 : 嗯？<br>旅行者 : 是什么？<br>散兵 : 星空本身，就是个巨大的谎言。<br>莫娜 : 星空…谎言？这是什么意思？<br>派蒙 : 是想反驳莫娜的什么占星术理论吗？那也不用说「星空本身是谎言」吧。<br>派蒙 : 在夜里，抬头往天上看，不就能直接看到星星吗？这种常识…<br>散兵 : 哈…哈哈哈哈哈哈！还在说这种天真的话！<br>散兵 : 不过，这也不是你的错，因为直到不久之前，我也是这样相信的…<br>莫娜 : 直到刚才？你是指…<br>散兵 : 哼，我可没空再陪你们探讨这些了。<br>散兵 : 「丑角」那家伙…把这种任务交给我，居然不事先预警可能的「发现」…是想故意吓我一跳吗？！<br>散兵 : 我现在必须去确认「真相」。那么，再见了，菜鸟们！<br></p>';
		//千住百目の浮世
		document.getElementsByClassName('hall-notice-text')[0].innerHTML = '稻妻内战之局势当前尚不明朗。战事愈是迁延日久，则于我等愈发有利…<br>为拓展反抗军「邪眼」之需求，煽动战争烈度，促进两方统帅之持久战决心…<br>特请诸位同僚辅助二等海务尉官内森阁下之工作，断绝珊瑚宫军速战速决之希望…<br>如有意外，则及时帮助内森阁下逃离，不可为两方留下「愚人众」渗透之口实！<br>此乃保障「邪眼」供应无虞之大事，切记，切记！';
		document.getElementsByClassName('hall-notice-title')[0].innerHTML = '殿中监指示';
		document.getElementById('battle-fatui-omnipresence-over-mortals').innerHTML = '打倒愚人众先遣队';
		document.getElementsByClassName('talk-scaraouche-delusion-unknown-star-title')[0].innerHTML = '玩了《未归的熄星》';
		document.getElementsByClassName('talk-scaraouche-delusion-unknown-star-text')[0].innerHTML = '散兵 : 没想到你们能找到这里来，做得不错嘛。<br>散兵 : 有趣。才见面，就是一副要找我拼命的样子了。<br>旅行者 : 你们把邪眼分发给反抗军…<br>散兵 : 噢，原来是说这件事。<span class="mark">我虽然站在这里，但也只是代为执行计划而已。</span><br>散兵 : <span class="mark">主谋当然另有其人了。</span>不是很能干吗？尽情去找吧！<br>散兵 : 才这点「小事」就被激怒了？你好像变了嘛…变得不堪一击。<br>派蒙 : 你竟然说这是小事…<br>散兵 : 难道不是吗？在这浮世之中，人命如同草芥一般。<br>散兵 : 没有邪眼，他们也一样会死。至少，邪眼还给了他们实现「愿望」的机会。<br>散兵 : 眼狩令的价值，你们真的了解吗？当初促成这件事花了不小的力气，自然是因为它有利于我们。<br>散兵 : 不过现在看来，一切都很值得。制造纷争，为推广邪眼铺路，让力量自行吸引追寻它的弱者…<br>散兵 : 只需要一点点代价，就能得到掌握世界的感觉。用性命换取无上之力，挺划算的不是吗？<br>派蒙 : 眼狩令是你们促成的？难道说，你们从一开始就…<br>散兵 : 稻妻的外侧看起来十分稳固，但内侧…充满了留给我们的机会。稍加力气，就能从内部攻破。<br>散兵 : 永恒可以把时间拉得很长，然而，其间每一个节点都会变得无比脆弱。<br>散兵 : 就像你在反抗军的朋友一样，无论怎么努力，都不过是徒劳。<br>散兵 : 如同水中泡影，绚烂的同时，便会迎来毁灭。<br>散兵 : 越是失去就越想得到，越是无能就越要挣扎！哈哈哈，这种闹剧真让人开心啊。<br>旅行者 : 哲平他…<br>派蒙 : 喂！旅行者，快冷静下来——<br>(散兵和八重神子接触)<br>(旅行者失去意识)';
		document.getElementsByClassName('talk-scaraouche-delusion-title')[0].innerHTML = '不玩《未归的熄星》';
		document.getElementsByClassName('talk-scaraouche-delusion-text')[0].innerHTML = '散兵 : 没想到你们能找到这里来，做得不错嘛。<br>派蒙 : 你是愚人众的执行官…跟「女士」「公子」他们一样吗？<br>散兵 : 「女士」？「公子」？哦…没想到你已经见过我们最不可靠的两位同事了。<br>散兵 : 愚人众执行官第六席，「散兵」。很高兴见到你，大名鼎鼎的旅行者。<br>散兵 : 这么狼狈地过来找我，有何贵干？<br>旅行者 : 你们把邪眼分发给反抗军…<br>散兵 : 噢，原来是说这件事啊。<br>散兵 : 你们似乎搞错了一点。<span class="mark">我虽然站在这里，但也只是代为执行计划而已。</span><br>散兵 : <span class="mark">主谋当然另有其人了。</span>不是很能干吗？尽情去找吧！<br>散兵 : 才这点「小事」就被激怒了？没想到你这么不堪一击啊。<br>派蒙 : 你竟然说这是小事…<br>散兵 : 难道不是吗？在这浮世之中，人命如同草芥一般。<br>散兵 : 没有邪眼，他们也一样会死。至少，邪眼还给了他们实现「愿望」的机会。<br>散兵 : 眼狩令的价值，你们真的了解吗？当初促成这件事花了不小的力气，自然是因为它有利于我们。<br>散兵 : 不过现在看来，一切都很值得。制造纷争，为推广邪眼铺路，让力量自行吸引追寻它的弱者…<br>散兵 : 只需要一点点代价，就能得到掌握世界的感觉。用性命换取无上之力，挺划算的不是吗？<br>派蒙 : 眼狩令是你们促成的？难道说，你们从一开始就…<br>散兵 : 稻妻的外侧看起来十分稳固，但内侧…充满了留给我们的机会。稍加力气，就能从内部攻破。<br>散兵 : 永恒可以把时间拉得很长，然而，其间每一个节点都会变得无比脆弱。<br>散兵 : 就像你在反抗军的朋友一样，无论怎么努力，都不过是徒劳。<br>散兵 : 如同水中泡影，绚烂的同时，便会迎来毁灭。<br>散兵 : 越是失去就越想得到，越是无能就越要挣扎！哈哈哈，这种闹剧真让人开心啊。<br>旅行者 : 哲平他…<br>派蒙 : 喂！旅行者，快冷静下来——<br>(散兵和八重神子接触)<br>(旅行者失去意识)';
		
		talkscaraouchedelusionlogtext = '你愤怒地冲向「散兵」，但他似乎早有埋伏，没等你动手，陷阱发动，你便晕了过去…'
		document.getElementsByClassName('talk-scaraouche-delusion-log-unknown-star')[0].innerHTML = talkscaraouchedelusionlogtext;
		document.getElementsByClassName('talk-scaraouche-delusion-log')[0].innerHTML = talkscaraouchedelusionlogtext;
		
		document.getElementsByClassName('the-servants-path-log')[0].innerHTML = '被愤怒冲昏头脑的你落入了「散兵」的陷阱之中，在你昏迷前的一瞬间，却见到了八重神子的身影…';
		document.getElementsByClassName('the-servants-path-text')[0].innerHTML = '八重神子 : 跟着我说，「三二一，一二三，啊啊——」，快一点。<br>旅行者 : 「三二一，一二三，啊啊——」<br>八重神子 : 嗯嗯，不错不错，说明至少脑子目前还是没什么大碍的，嗯…<br>八重神子 : 好不容易把你这个像是嵌在了地里的小家伙给捞回来，要是坏掉了可就太可惜了。<br>派蒙 : 唔，从一开始我就想问，神子，你的谈吐举止和第一次见到你的时候怎么完全不一样…<br>八重神子 : 是吗？可能是屏退了其他那些巫女们的缘故吧。而且，我一直都是这个样子哦？<br>八重神子 : 人们所展现出来的，从来都是自己想展现出来的一面，这点我可清楚得很。<br>八重神子 : 所以，不论哪一面其实都是真正的「自我」，只是人们总喜欢无意义地去定义罢了。<br>八重神子 : 在这姑且属于人类的社会里，我也不过凭自己兴趣照做而已。<br>派蒙 : 我，好像没听太懂。<br>八重神子 : 呵呵，多多研究人类吧，小家伙，你也会明白的。<br>旅行者 : 「你究竟是如何…从散兵手上救下我的？」<br>派蒙 : 是呀！我当时光顾着照看旅行者，完全没注意你究竟做了什么…<br>八重神子 : 是「鸣神大社的秘法」，一下子就让那个叫散兵的家伙跪地求饶，你相信吗？<br>旅行者 : ……<br>八重神子 : 呵呵，比起思考这样的问题，你更应该好好想想该怎么回报我…不是吗？<br>八重神子 : 还是说，你的脑袋回路，果然还是出了些问题呢…<br>旅行者 : 非常感谢你，八重神子大人。<br>八重神子 : 倒也不必这么郑重就是了，我需要的是你的行动，呵呵。<br>八重神子 : 你现在应该…还在惦记「邪眼」的事，是吧？<br>旅行者 : 没错…后来怎么样了？<br>八重神子 : 放心好了，那个海祇岛的领航人已经带手下前去清剿了，也向全军颁布了严肃的军令，禁止邪眼的使用。<br>八重神子 : 散兵那家伙也不会在据点都暴露的情况下，替他的同僚做些自讨没趣的顽抗吧。<br>八重神子 : 唉，要是有时间，真想看看那些愚人众大吃苦头的样子…<br>八重神子 : 做得可真不错啊，名为珊瑚宫心海的女人，好想当面再跟她好好聊聊，只可惜…信仰分歧真是碍事。<br>派蒙 : 碍事？你可是鸣神大社的宫司呀！<br>八重神子 : 好了，告诉你这些只是为了让你放心，然后专心…替我办一件事。<br>旅行者 : 什么事？这就是救我的原因吗？<br>八重神子 : 你…见过她了吧？<br>旅行者 : 你是说雷电将军？见过，就在神像之下的仪式上…<br>八重神子 : 我说的，不是那个「人偶」，我是说…你应该见过「她」了吧？<br>旅行者 : 你是说…在那个「空间」里的？<br>八重神子 : 嗯，为了维持「自我」，而在「一心净土」中进行着无穷无尽冥想的，真正的雷电将军…<br>八重神子 : ——其名为「影」。<br>派蒙 : 你是说，仪式上出现的只是人偶，而真正的雷电将军是旅行者后来见到的那个？<br>派蒙 : 也就是说，当时变换过的不只是「战场」，连「对手」也换过了？<br>旅行者 : 我也留意到过一些微妙的差别…可她为何要如此费周折？<br>八重神子 : 这才是那位雷电将军的「永恒」啊。<br>八重神子 : 在追求这个国度的永恒之前，势必自己要先触及永恒才是。<br>八重神子 : 肉身终会归于尘土，就由「人偶」之身来替代。<br>八重神子 : 精神亦难逃磨损，她便将意识寄宿于佩刀之中，用冥想来规避一切纷扰。<br>派蒙 : 那么，她用刀划开的那个空间就是…<br>八重神子 : 「一心净土」，即是与她的「内心世界」一样的空间，一般只容许「自我」的存在。<br>八重神子 : 封闭在自我的世界里，外部的繁杂都交给那个只会不顾一切奔向永恒的人偶来处理…<br>八重神子 : …这就是影摸索出的永恒之道。<br>旅行者 : 钟离也谈及过「磨损」。也是他退位的原因之一。<br>八重神子 : 你说的是摩拉克斯吗？许久不见，原来璃月的神做出了这样的选择，果然是位有趣的神。<br>派蒙 : 不过雷电将军这样做，好像确实可以避免钟离那样的问题…<br>八重神子 : 呵呵，可是…她的做法不也很像是发脾气把自己关在屋里的孩童一样吗？<br>八重神子 : 而且她所谓的「永恒」，也早已变成了她自己以为的「永恒」了。';
		document.getElementsByClassName('wishes-text')[0].innerHTML = '八重神子 : 这不是凯旋的旅行者吗，到神社可是来还愿的？<br>派蒙 : 不是你叫我们来的吗！<br>八重神子 : 哈哈…开个玩笑，我正在等你们。<br>派蒙 : 神子的心情好像很不错。<br>八重神子 : 是啊，难得和多年未见的老友叙叙旧，怎么说都是件值得开心的事吧。<br>八重神子 : 话说…我后来才听说，你居然和愚人众的执行官来了场御前决斗，这胆识实在值得赞许。<br>旅行者 : 当时有点上头。<br>八重神子 : 能正面挫败那个「女士」，你的实力也已经超过我的预测了呢。<br>八重神子 : 但总之，能赢就好，可喜可贺。<br>派蒙 : 终于让愚人众的计划好好受挫了一次，嘿嘿。<br>派蒙 : 至少这次，没让他们成功带走「神之心」！<br>八重神子 : 等等，你们提到了「神之心」？<br>八重神子 : 是那个像棋子一样的东西么？<br>派蒙 : 对呀对呀，神子也见过吗？归七神所有，与天空岛相连的「神之心」！<br>八重神子 : 唔…<br>派蒙 : 怎么了？<br>八重神子 : 那个东西，被我交出去了哦。<br>旅行者 : 嗯？<br>派蒙 : 啊？<br>八重神子 : 不然的话…你以为我用什么从「散兵」的手里换回了你的命呢？<br>旅行者 : ……原来那个时候就已经…<br>八重神子 : 「散兵」如今可是愚人众执行官的第六席，论实力，还在「女士」之上。<br>八重神子 : 我可不是那种动不动就拼上自己性命的角色。<br>派蒙 : 我竟然，一时间不知道该说什么好了。<br>旅行者 : 可是，「神之心」为何会在你手里。<br>八重神子 : 影自从创造了人偶的形体以后，「神之心」便无处安放了。<br>八重神子 : 作为曾经与影关系最密切的朋友…影将「神之心」交到我手上，并保管在鸣神大社。<br>八重神子 : 她本身就已经不再需要「神之心」的力量，据她说，她也已经与天空岛断绝了联系。<br>八重神子 : 既然如此，「神之心」便是无用又只会招致纷争之物罢了。<br>八重神子 : 所以，用它换回「计划」的核心人物，不是一件非常划算的买卖吗？<br>八重神子 : 而且从结果来看，我确实赚到了啊，呵呵。<br>派蒙 : 这么说，也是…在我心里，旅行者好像也是比一颗神之心要值钱的…<br>旅行者 : 怪不得后来没见过「散兵」。<br>派蒙 : 唉，算了算了，事已至此应该也追不回来了吧，过去的就先让它过去吧。<br>派蒙 : 所以，神子还没说，这次叫我们过来究竟是要做什么呢。<br>八重神子 : 呵呵，是答谢哦。<br>派蒙 : 真的嘛！<br>八重神子 : 既然你们一直在全提瓦特旅行，如今稻妻之旅也该告一段落了吧？<br>八重神子 : 作为酬谢，不论是今后的路还是过往的疑惑，就由我来给二位一并解答吧。<br>八重神子 : 有什么想问的吗？<br>旅行者 : 关于「人偶」将军…<br>八重神子 : 「人偶」将军的技术源自于某些现今已然失落的知识，或许只有身为神明的她才能知会其中源头…<br>八重神子 : 不过…倒是有件事你们应该会感兴趣。<br>八重神子 : 在影开始对自己的神明之躯进行自我改造之前，还凭空创造过一个「原型人偶」…<br>派蒙 : 那、那难道有三个雷电将军！？<br>八重神子 : 不，那个原型只是为了验证可行性，外貌和智能都没有依托影的自身去设计，可以说算是试做品。<br>八重神子 : 按照最初设想，影应当将他直接废弃，但也许影认为这样做过于残酷，便选择只将他体内的力量封印。<br>八重神子 : 后来，他便像个普通人一样，凭借自我意识流浪在稻妻的土地上，直到…愚人众看中了他。<br>派蒙 : 愚人众！<br>八重神子 : 而那个原型人偶经过愚人众里某些奇人异士的调整，解除了力量的封印，甚至比封印之前更强大也说不定。<br>旅行者 : 莫非…<br>八重神子 : 嗯，神之造物亲手夺去了神之心…那个原型人偶便是如今的「散兵」。<br>派蒙 : 居、居然还有这样的事！<br>八重神子 : 是啊，究竟是机缘巧合，还是天命注定呢。';
		//document.getElementsByClassName('')[0].innerHTML = '';
		
		//華やぐ紫苑の庭
		document.getElementById('five-kasen-summary').innerHTML = '<p>关于「五歌仙」：<br>五歌仙是稻妻古代的传说人物，因为能歌善赋而得到「五歌仙」的美名。据说他们的作品深得将军大人喜爱，每年五人将新作集结成册后，都会派出一人前往天守阁，将诗集献给将军品鉴。<br>五歌仙分别名为「翠光」、「葵之翁」、「赤人」、「墨染」与「黑主」。<br>五人真名现已不可考，一种流传较广的说法是：因为五歌仙故事曾被大量搬上舞台，为方便观众辨认角色，便以绿蓝红白黑五色戏服加以区分，久而久之，观众便以角色的代表色为歌仙命名。不过也同样找到了「翠光因其草庵名『翠光堂』而得名」、「赤人因喜爱在作品上加盖朱印而得名」之类的说法。</p><p>五歌仙个人资料汇总：<br>翠光：爱饮酒，平民出身，性格洒脱不羁。一说翠光因为居住的草庵名为「翠光堂」而得名。<br>葵之翁：擅长弈棋的老者，除诗歌外，也有小说作品传世。一说他成名较晚，真实身份是幕府官员；另一说他并非人类，而是长寿的妖狐所化。<br>赤人：擅长剑术，极有可能是武人出身。一说赤人因为喜爱在作品上加盖朱印而得名。<br>墨染：曾是巫女，擅花艺、舞蹈，后担任将军身边侍女。一说墨染在成名后辞去官职，专心创作，另一说墨染直到晚年依旧陪伴在将军身侧服侍。<br>黑主：信息较少，真实身份不详。或许正因为此，黑主在故事中的身份和性格设定，比其他人都要更丰富多样。</p>';
		document.getElementsByClassName('tale-of-the-five-kasen-video')[0].innerHTML = '<p>无法读取视频。</p><iframe src="//player.bilibili.com/player.html?aid=468168491&bvid=BV1M5411S7Lg&cid=574322944&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"></iframe>';
		//冬夜の戯劇
		document.getElementsByClassName('a-winter-nights-lazzo-video')[0].innerHTML = '<p>无法读取视频。</p><iframe src="//player.bilibili.com/player.html?aid=598329615&bvid=BV1mB4y1e7Lh&cid=769751352&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"></iframe>';
		
		//迷夢と虚幻と欺瞞
		document.getElementsByClassName('the-divine-will-text')[0].innerHTML = '「我曾三度遭到背叛，因而懂得世间万物不过是欺瞒的幌子。」<br>「我的愤怒，绝不平息。」<br>「其一为神。我的创造者，我的『母亲』。」<br>「其为力量所左右，舍弃无用的我。」<br>「其二为人。我的家人，我的朋友。」<br>「其为恐惧所困缚，视我为可憎恶之物。」<br>「其三为同类。我的期盼，羽翼尚未丰满的鸟雀。」<br>「其为寿限所控制，违背与我的约定。」<br>「人绝不可信，神亦令我憎恨。我舍弃所有，否定并嗤笑人间一切。」<br>「我的胸膛不会再被世俗染指，摒弃掉人类低劣的情感。」<br>「我空洞的部分，将如诞生之刻的纯白卷轴那般，以满载神性的至高神明之心来填满。」<br>「呵呵呵…哈哈哈哈！无需恐惧，疼痛只是一瞬。」<br>「你们的时代…就要结束了。」';
		document.getElementsByClassName('the-gaze-from-a-certain-god-text')[0].innerHTML = '海芭夏 : 旅行者？是旅行者吗！<br>派蒙 : 啊！你是…海芭夏！<br>旅行者 : 好久不见！<br>海芭夏 : 天啊，可真是令人开心，能见到你们真是太好了。<br>纳西妲 : 这位是…？<br>派蒙 : 是我们在道成林时候遇见的修行学者，当时正在那什么…「林居狂语期」。<br>纳西妲 : 唔…这样吗。<br>海芭夏 : 是啊，我们可是老朋友了。正巧我来这边之后，没什么人愿意跟我讲话，你们来得正是时候。<br>派蒙 : 海芭夏，你开心过头啦。话说你居然已经离开道成林了吗，不继续在森林里修行啦？<br>派蒙 : 等等，不对…难道说，你已经修行结束，进入「寂静圆满期」了？<br>海芭夏 : 哼哼…你说呢？<br>海芭夏 : 我之前…已经在意识中见过神明了。<br>纳西妲 : …嗯？<br>派蒙 : 啊？真的吗！恭喜恭喜！<br>旅行者 : 真为你高兴。<br>海芭夏 : 哈哈…能跟你们分享这份崇高的喜悦，可真是让人快慰啊！<br>海芭夏 : 与神明意识相通的一刻，那简直是无与伦比的至高体验…<br>派蒙 : 那么厉害…<br>旅行者 : 其实我们是来找提纳里的。<br>海芭夏 : 这样啊…哦对了，请等一下，我可没有忘记跟你们的约定哦。<br>海芭夏 : 当时我说，等我获得了真正的智慧，也许就能帮你们解释曾经在世界树那里看到的东西。<br>海芭夏 : 而现在的我呢，不仅拥有了智慧，甚至还能帮助你们自行与神明的意识进行连接哦？<br>派蒙 : 这、这也能做得到吗？<br>旅行者 : 你觉得可信吗，纳西妲？<br>纳西妲 : 我闻所未闻，不过…如果你想尝试，我会全力保护你的意识。<br>海芭夏 : 等一下哦，我带了些灵酚香来，这依旧是必不可少的「仪式」。<br>派蒙 : 又是那种熏香吗？<br>海芭夏 : 好了，现在…握住我的手，我会帮你们建立意识连接的「通道」。<br>纳西妲 : 嗯。<br>海芭夏 : 准备好了吗？';
		document.getElementsByClassName('the-gaze-from-a-certain-god-log')[0].innerHTML = '「通道」成功建立，你的意识触及了所谓的神明…';
		
		document.getElementsByClassName('the-divine-will-video')[0].innerHTML = '<p>无法读取视频。</p><iframe src="//player.bilibili.com/player.html?aid=943683198&bvid=BV1hW4y1e7Kx&cid=851080800&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"></iframe>';
		
		document.getElementsByClassName('the-gaze-from-a-certain-god-text2')[0].innerHTML = '派蒙 : 这是…！<br>旅行者 : 并非是大慈树王的意识…<br>派蒙 : 我们看到的，是「散兵」的过去吗！？很多信息都重合上了！<br>派蒙 : 可是海芭夏口中的神明又怎么跟「散兵」联系在一起的？<br>海芭夏 : 看到了吧，感受到了吧，崇高的神明，崇高的意志，崇高的情感！<br>海芭夏 : 唉…可惜啊，可惜…<br>海芭夏 : 可惜我的胸腔里跳动的，却是一颗肮脏的、人类的心…神明大人啊，可否宽恕我，可否救赎我呢…<br>纳西妲 : 看出来了吗，这可不是什么「寂静圆满期」，恐怕她是…<br>旅行者 : 你清醒一点，海芭夏！<br>海芭夏 : 啊…！<br>海芭夏 : 你…你为什么对我这么凶呢？为什么那些人都在躲着我呢？<br>海芭夏 : 我找到了神明的智慧啊，我应该被夸奖才对啊，我成为了那个在黑暗里探索又找到了光明的人啊！<br>派蒙 : 海芭夏…<br>海芭夏 : 明明应该是这样啊…<br>海芭夏 : …等等…<br>海芭夏 : 难道说…是我已经疯了吗？<br>旅行者 : ……<br>纳西妲 : 等一下，周围不对劲！<br><br><b><i class="i-see-you"></i>「我看到你了」</b>';
		
		//聖遺物
		document.getElementsByClassName('pale-flame')[0].innerHTML = '苍白之火';
		document.getElementsByClassName('goblet-of-eonothem-surpassing-cup')[0].innerHTML = '超越之盏';
		document.getElementsByClassName('husk-of-opulent-dreams')[0].innerHTML = '华馆梦醒形骸记';
		document.getElementsByClassName('bloom-times')[0].innerHTML = '荣花之期';
		document.getElementsByClassName('plume-of-luxury')[0].innerHTML = '华馆之羽';
		document.getElementsByClassName('song-of-life')[0].innerHTML = '众生之谣';
		document.getElementsByClassName('calabash-of-awakening')[0].innerHTML = '梦醒之瓢';
		document.getElementsByClassName('skeletal-hat')[0].innerHTML = '形骸之笠';
	
		document.getElementsByClassName('goblet-of-eonothem-surpassing-cup-about')[0].innerHTML = '“从外观无从断定经历了多少岁月的精致杯盏。”';
		document.getElementsByClassName('goblet-of-eonothem-surpassing-cup-text')[0].innerHTML = '在诞生之初就拥有无比美丽的面貌的「他」，<br>注定拥有长久的「年限」与空洞的「意志」。<br><br>作为神造的超越者，却当成无用之物被弃置。<br>因为未可知的错误，从「休眠」中自行苏醒，<br>开始行走在天地与凡人之间。<br><br>愚者找到他之前，他已经从无数年的漂流中，<br>习得了这样的经验：<br><br>我是超越一切人的「人」，<br>连神也惮于干涉我的命运。<br>无论人与神，还是命运都没有裁决我的资格，<br>应当如何度过剩余的寿命，也是我的自由吧。<br><br>既然与这些以面具示人的人同行似乎很有趣，<br>那就成为「一丘之貉」吧。';
		
		document.getElementsByClassName('bloom-times-about')[0].innerHTML = '“六瓣花形状的小型金饰，以永不凋零之姿，阅遍俗世易逝的荣华。”';
		document.getElementsByClassName('bloom-times-text')[0].innerHTML = '在诞生之初就拥有无比美丽的面貌的「他」，<br>注定拥有长久的「年限」与空洞的「意志」。<br><br>作为神造的超越者，却当成无用之物被弃置。<br>因为未可知的错误，从「休眠」中自行苏醒，<br>开始行走在天地与凡人之间。<br><br>愚者找到他之前，他已经从无数年的漂流中，<br>习得了这样的经验：<br><br>我是超越一切人的「人」，<br>连神也惮于干涉我的命运。<br>无论人与神，还是命运都没有裁决我的资格，<br>应当如何度过剩余的寿命，也是我的自由吧。<br><br>既然与这些以面具示人的人同行似乎很有趣，<br>那就成为「一丘之貉」吧。';
		
		document.getElementsByClassName('plume-of-luxury-about')[0].innerHTML = '“于避世之幽馆中一同带出的箭羽状的凭证，因创造者的怜悯之情，而与某具沉睡之躯一同置于馆中。”';
		document.getElementsByClassName('plume-of-luxury-text')[0].innerHTML = '流浪多年的倾奇者已不会再想起它，<br>但闭上双眼，却仍能看到踏鞴砂的月夜与炉火。<br>年轻仁厚的副官说：<br>「这金饰是将军大人所赐身份之证，」<br>「但你行走世间时，若非万不得已，」<br>切不可将自己的身份透露给他人。」<br>刚正不阿的目付说：<br>「这枚金饰是将军大人所赐身份之证，<br>但你既非人类亦非器物，<br>在下只能这样处置你，还请你不要怨恨！」<br><br>摒弃昨日的倾奇者已不会再想起它，<br>但捂住耳朵，却仍能听见那年的暴雨与狂风。<br>一双双期盼的眼睛说：<br>「这金饰是将军大人所赐身份之证，」<br>「定能救众人于水火吧。」<br><br>灵动美丽的巫女说：<br>「这金饰是将军大人所赐身份之证，」<br>「将军绝不会弃你不顾。」<br>「我亦会尽己所能，即刻派人相救…」<br><br>…然而，金色的箭羽最终被尘土覆盖，<br>一切故事也被业火焚烧得无影无踪。';
		
		document.getElementsByClassName('song-of-life-about')[0].innerHTML = '“于稻妻而言乃是舶来品的小物件。名为机芯的零件已被卸下，指针也不再转动。”';
		document.getElementsByClassName('song-of-life-text')[0].innerHTML = '他最初是作为「心」的容器而诞生，<br>却在睡梦中淌下泪珠。<br>创造者无可奈何地察觉到：<br>他无论作为器物或人类，都过于脆弱了。<br><br>创造者不忍将他毁弃，于是让他继续沉睡下去。<br>在她之后的创造里，也摒弃了存放心脏的设计。<br>不久后，世间最为尊贵、最为殊胜的「证」，<br>便因无处安放，被送到了影向山的大社之中。<br><br>后来，美丽的人偶苏醒了，开始了流浪。<br>他见到了许许多多的心，<br>善良的，正直的，坚毅的，柔软的…<br>人偶也想拥有一颗心脏。<br><br>再后来，美丽的人偶终于拿到了那颗「心」，<br>那是他诞生的意义，存在的目的。<br>但是，它却并非人偶真正想要的东西，<br>因为它并未蕴含任何祝福，<br>只是一颗用友善的外表所包裹的，<br>充满自私、虚伪、狡诈与诅咒的祭品。<br><br>善与恶，皆是众生之谣，无用而聒噪。<br>但只要将这颗「心」挖出来，<br>就什么都感受不到了…';
		
		document.getElementsByClassName('calabash-of-awakening-about')[0].innerHTML = '“以黑漆与金粉装饰过的葫芦，已看不出本来的颜色，好像主要作用是演出的道具。”';
		document.getElementsByClassName('calabash-of-awakening-text')[0].innerHTML = '天目、经津、一心、百目、千手，<br>曾并为稻妻「雷电五传」五支。<br>而今却只剩「天目」一支仍有师徒传承，<br>「一心」一支，勉强算得有后人在世。<br>在民间看来，这不过是时间流转的必然结果，<br>却不曾想那些突如其来的衰败都暗藏玄机。<br><br>流浪者绝不会承认，<br>自己的所作所为是出于对刀匠的报复；<br>当然也绝不会提起，<br>计划才进行一半，自己就突然索然无味的原因。<br>他只会用从某个学者那里学来的语气说：<br>「这一切，不过是人性的小小实验。」<br><br>稻妻的传统戏剧中，有一类角色被称呼为「国崩」。<br>他们通常都是意图窃取一国、玩弄阴谋诡计之人。<br>在流浪的最后，他凭借自己的意志选择了这个名字。<br>而他之前使用过的名字，就连他自己也不记得了。<br><br>稻妻的传统戏剧，常以三幕之名相连为剧名，<br>譬如《堇染》、《山月》、《虎啮鉴》三幕，<br>合为《堇染山月虎啮鉴》一剧。<br>或许终有一天，这具形骸所经历的一切，<br>也会化为人类口中的故事，地脉遥远的记忆。<br>只是现在，属于他的第三幕仍在上演。';
		
		document.getElementsByClassName('skeletal-hat-about')[0].innerHTML = '“流浪者在旅途中遮光避雨的斗笠，但后来却成为了遮挡面目、隐藏表情的便利道具。”';
		document.getElementsByClassName('skeletal-hat-text')[0].innerHTML = '「流浪者，流浪者，你要去哪里啊？」<br>流浪的少年被孩子喊住。<br>他是踏鞴砂工匠的孩子，虽然生了病，却仍有清澈的双眼。<br>少年告诉孩子，自己必须去稻妻城。<br>「可现在好大的雨，他们说之前离开的人也都没有回来！」<br>少年张了张嘴，最后只好对孩子微笑。<br>等他再次踏上这座岛屿，孩子已经不见影踪。<br><br>「稻妻人，你要去哪？这可不是你能坐的船！」<br>流浪的少年被港口的船夫拦下。<br>在少年拔刀之前，同行的男人伸手止住了他。<br>男人告知船夫，这个异国的少年将与自己同行。<br>「原来是大人的客人，是我冒昧了。」<br>男人递给少年御寒的外套，但少年摇了摇头。<br>现在他只想知道，此次远行能见到什么有趣的东西。<br><br>「执行官大人，你要去哪里？」<br>少年最讨厌聒噪的人类，他反手打了部下的脸。<br>但少年也最喜欢观察人类的惊恐与无助，<br>或许正因为表情丰富，这个愚蠢的部下才会被他留在身边。<br>他告诉跪在地上战战兢兢的人，这次东去蒙德。<br>「属下明白了，这就让直属护卫们准备！」<br>护卫并无必要，但他已懒得再与蠢材废话。<br>他再度戴上了流浪人的斗笠，只身向东行去。<br><br>「孩子，你要去哪儿啊？」<br>归国的少年在路边被名老妪喊住。<br>他告知老妪，自己准备向西去。<br>「要去八酝岛吗，是去做什么啊？」<br>老妪并没有多想，只是最近很不太平。<br>少年带着真诚的笑容谢过她的关心，说自己与人有约在先。<br>小船缓缓靠岸，一个异国装束的女人站在岸边，<br>远远地向少年抛出一枚小小的晶球。<br>少年轻松接住了晶球，将它对准了如血残阳。';
	//ボス
document.getElementsByClassName('boss-video')[0].innerHTML = '<p>无法读取视频。</p><iframe src="//player.bilibili.com/player.html?aid=859296635&bvid=BV1sV4y1576g&cid=869759578&t=709&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>';
document.getElementsByClassName('boss')[0].innerHTML = '週本「？？？」';
	document.getElementsByClassName('boss-story')[0].innerHTML = '秘境・故事';
	document.getElementsByClassName('boss-detail')[0].innerHTML = '秘境详情';
	document.getElementsByClassName('boss-stage1')[0].innerHTML = '第一形态: ？？？';
	document.getElementsByClassName('boss-stage2')[0].innerHTML = '第ニ形态: ？？？';
	document.getElementsByClassName('boss-drop')[0].innerHTML = '素材';
	}