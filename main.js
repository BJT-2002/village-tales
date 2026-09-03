/* 村中有事 · Village Tales - 主脚本 */
/* ============ 案件数据 ============ */
const CASES = [
  {
    title: "案件一 · 麦田与树根",
    description: "霜冻让地精格鲁克的田地减产。为了明年不饿肚子，他决定砍掉森林北边的二十棵老树开垦新田。但树精薇拉说，那片森林是全村的水脉，砍了溪流就会干涸。",
    characters: [
      {
        name: "格鲁克", role: "原告 · 地精", portrait: "assets/images/案件一地精.png",
        statement: "去年霜冻害我们减产三成，再不开垦新地，明年全村都要饿肚子！森林北边那块地最肥，只要砍掉二十棵老树，就能多养活五十人。树精们就是死脑筋，守着几棵烂树不让动！",
        secret: "他私下已收了一位外来商人的定金——商人要那种老树的硬木心制作法器。他若成功开垦，不仅能得粮食，还能赚一笔外快。他隐瞒了这笔交易。"
      },
      {
        name: "薇拉", role: "被告 · 树精", portrait: "assets/images/案件一树精.png",
        statement: "那片森林是村里的水肺，根系锁住了整个山泉。砍树会导致溪流干涸，下游的水田和果园都会枯死。格鲁克只看到眼前的口粮，却没看到三年后的干旱。他若执意开垦，我就用藤蔓封住所有农具。",
        secret: "（无额外隐瞒，所言属实，但态度强硬。）"
      }
    ],
    clues: [
      "格鲁克账本夹层有一张收据，写着「收硬木定金十五银」。",
      "森林北边被标记砍伐的那棵老树根部，有一处新鲜刻痕。",
      "格鲁克谷仓墙角藏着一截切断的树枝，断面有暗红色环纹，与普通柴木不同，像是试砍的硬木心样本。"
    ]
  },
  {
    title: "案件二 · 坩埚里的秘密",
    description: "从男巫棘刺门前经过的人都说，他的房子里散发着一股刺鼻的焦臭味。有人说他疯了，有人说他在熬毒药。而他的邻居，已经整整一个月没敢开窗了。",
    characters: [
      {
        name: "艾琳薇尔", role: "原告 · 精灵", portrait: "assets/images/案件二艾琳薇尔.png",
        statement: "棘刺从入秋开始，每天都在屋里煮东西。那味道比死老鼠还呛人，飘到我家，我养的三只信鸽全死了。我问他在煮什么，他说是药。什么药能毒死鸽子？我怀疑他在炼制禁术——之前有巫师就是这么堕落的。我要求进他家检查，如果发现违禁材料，他必须搬出村庄！",
        secret: "她想要棘刺手里的半张配方——那配方里有一种提炼法，能用来强化精灵弓箭的附魔。她真正的目的不是赶走棘刺，是逼他交出技术。"
      },
      {
        name: "棘刺", role: "被告 · 男巫", portrait: "assets/images/案件二男巫.png",
        statement: "我确实在煮东西。那是我为热病研制的特效药引子，味道冲，但无毒。艾琳薇尔信鸽死了，我深表遗憾，但那是她鸽子撞上我窗棂摔死的，跟我的药味无关。她不请自来踹开我的门，打翻了我熬了三天三夜的药锅——那锅药能救六个人。要么她赔我药材，要么我向她索赔。",
        secret: "他锅里煮的确实不是「药」——他在用沼泽毒菇配合龙血苔藓炼制一种瘴气转化液，能把森林里天然产生的腐瘴转化为肥料，已与村外商人达成交易。但材料里的物质确实会污染环境，前两次试验已让屋后菜地变色。他偷偷处理了变色泥土，但味道散不出去。"
      }
    ],
    clues: [
      "棘刺厨房灶台下有三口锅：一口日常煮汤，一口深褐色残渣（瘴气转化液残迹），一口藏在木板暗格里有焦痕。",
      "屋后菜地边缘有一圈颜色明显发暗的泥土，用手捏碎后有刺鼻氨味。",
      "艾琳薇尔背包里有一张用精灵文抄写的配方残页，笔迹是她自己的。"
    ]
  },
  {
    title: "案件三 · 碎梦的学徒",
    description: "兽人少年倒在高塔台阶下，手中攥着一截折断的法杖。魔法师说他擅闯禁地偷学咒语，少年说是法杖自己炸开的。而塔顶那扇从未上锁的门，今天第一次被人从里面钉死了。",
    characters: [
      {
        name: "塞拉斯", role: "原告 · 魔法师", portrait: "assets/images/案件三魔术师.png",
        statement: "这孩子趁我外出采药，翻窗进入我的高塔，偷阅了我的《初级咒语手稿》。他在试图施展引火术时点燃了实验台，引发小型爆炸。若不是我及时赶回，整座塔连同附近三间木屋都要化为灰烬。我要求将他交由兽人长老严加管束，并禁止他再靠近魔法高塔百步之内。",
        secret: "那根炸开的法杖是他三天前失败的实验品——他在尝试将兽人战士的「战吼之力」注入法杖，制造一种不依赖魔法天赋也能使用的武器。爆炸是因为法杖本身的能量回路不稳定，跟加尔是否施法无关。他隐瞒这一点，是因为不想被发现借用兽人的力量。"
      },
      {
        name: "加尔", role: "被告 · 兽人少年", portrait: "assets/images/案件三兽人.png",
        statement: "我没有偷！是那根法杖自己在桌上震动，我碰了一下它就把我炸飞了。我承认我好奇，我确实翻过那本书，但我什么都没施！他看我的眼神就像看一只闯进屋子的野狗——他根本不在乎真相，他只是想找个借口把我赶走，因为兽人不配碰魔法！",
        secret: "他并非偶然翻窗——他已经在塔外观察了塞拉斯整整两个月。他母亲在战斗中受伤，他想学会最简单的「舒缓术」替母亲缓解疼痛。他不敢说出口，因为兽人部落认为魔法是软弱者的把戏。他甚至已经偷偷抄写了三个咒语公式藏在腰带的夹层里。"
      }
    ],
    clues: [
      "塔内实验台上有两截断裂的法杖断口：一节截断处焦黑卷曲（能量从内部崩裂），另一节切口平整（像是被利刃劈断）。",
      "塞拉斯书桌暗格里有一张草图，画的是「战吼法杖」结构图，边角写着批注：「已完成76%，缺陷：二阶共鸣不稳」。",
      "加尔腰带夹层里有一块叠得整整齐齐的旧羊皮纸，上面用歪歪扭扭的字迹抄了三段咒语，旁边用兽人语标注着「母亲—舒缓」。"
    ]
  },
  {
    title: "案件四 · 赔礼的混血",
    description: "女巫与精灵族素有矛盾，精灵长老把一个混血精灵少年送到女巫塔下缓和关系。而在女巫收下少年的第二天，她珍贵的药材失窃了。",
    characters: [
      {
        name: "莫甘娜", role: "当事 · 女巫", portrait: "assets/images/案件四女巫.png",
        statement: "希尔温把这混血塞到我塔下，说是为巡逻队误伤我的渡鸦赔礼。我收下了。第二天我的月泪草罐子被人打开了。我问艾尔洛，他说没碰，可他指甲缝里有碎屑。精灵族送人就是安插眼线，二十年了我太了解他们。我要把他退回去，希尔温也必须公开承认派了间谍。",
        secret: "她不是害怕心软，她是真的恨精灵族。二十年土地纠纷、采药冲突、议会针锋，让她认定「混血也是精灵的种」。她认定艾尔洛就是卧底，证据只是佐证了她的预判。她宁可信自己二十年的「经验」，也不愿相信一个来路不明的混血孩子。"
      },
      {
        name: "艾尔洛", role: "当事 · 混血精灵", portrait: "assets/images/案件四混血.png",
        statement: "我没碰罐子，我不知道月泪草是什么。昨晚我确实出去了——我是去看渡鸦，小时候受伤，一只渡鸦给我衔来过草药，所以我想看看它。指甲缝里的碎屑我不知道哪来的。求求你不要把我送回去，长老他不会接受我的……",
        secret: "他没偷药，他是真的去看渡鸦了。但他希望女巫能留下他。精灵族不要他，女巫也不收他，他就真的无家可归了。他的恐惧是被彻底抛弃。他拼命证明自己不是卧底，不只为清白，更为了一个容身之处。"
      },
      {
        name: "希尔温", role: "当事 · 精灵长老", portrait: "assets/images/案件四精灵长老.png",
        statement: "送卧底？真是想多了。这混血在我们族里什么都不是，他母亲和人类私奔，我把他送给女巫，一方面是想缓和关系，另一方面也是想清掉一个累赘。至于他偷没偷药？呵，一个混血，偷东西有什么稀奇？莫甘娜不想要也无所谓，但精灵族不会再收他。",
        secret: "他对艾尔洛毫无恶意——也毫无善意，只是不在乎。但他不知道的是：他的巡逻队里，有人在半夜擅自进了女巫塔。他说的「没有安插卧底」是真的，但他管不住自己的兵。"
      }
    ],
    clues: [
      "女巫药柜月泪草罐子被拧开过，罐口沾着草屑，放在第三层架上。柜前地面有一块松动的石砖，踩上去会出声，砖面边缘的灰尘被蹭掉了。以艾尔洛的身高要踮脚才够得到，一旦踮脚必然踩响石砖，女巫就在楼下，不可能听不见。",
      "塔外窗台下泥土上有一串脚印，比艾尔洛的脚大出两码，方向是从塔内踩向塔外。鞋底纹路是精灵巡逻队制式靴底的菱纹格。",
      "艾尔洛右手掌心有磨破的水泡，破口组织液中夹着一丝极细的黑色纤维——质地和颜色与精灵巡逻队制式斗篷袖口滚边完全一致。"
    ]
  }
];

const INTRO_TEXT = `在森林与群山之间，有一座与世隔绝的村庄，精灵、兽人、巫师、魔法师在这里共同生活。
村民会把各种麻烦交到你面前：邻里矛盾、种族误解、产业纷争、魔法事故、家族纠葛……
有人说出了全部真相，有人隐藏了关键细节，也有人甚至没有意识到自己真正想要什么。
你可以自由询问每一个人，在他们的言语、情绪和故事中寻找答案。
没有固定的选项，也没有唯一正确的决定。
你的判断可能化解一场争执，也可能改变村民之间的关系；
可能让村庄繁荣，也可能留下新的矛盾，村庄会根据你的决断走向不同的未来。`;

/* ============ 状态 ============ */
// 支持 ?reset=1 强制清除旧设置，从头开始填写 API Key
if (new URLSearchParams(location.search).get('reset') === '1') {
  ['apiKey', 'apiBase', 'apiModel'].forEach(k => localStorage.removeItem(k));
}
const state = {
  apiKey: localStorage.getItem('apiKey') || '',
  apiBase: localStorage.getItem('apiBase') || 'https://api.deepseek.com',
  apiModel: localStorage.getItem('apiModel') || 'deepseek-chat',
  caseIndex: 0,
  charIndex: 0,
  // 每案件统一的对话流（不分角色）：caseIndex -> [{speaker: 'user'|角色名, content}]
  caseChat: {},
  villageState: '一座与世隔绝、各族混居的小村，平衡而脆弱，尚未有显著波动。',
  // 每案件决断后的记录
  history: []
};

function charId(ci, chi){ return ci + '_' + chi; }

/* ============ 工具 ============ */
function $(id){ return document.getElementById(id); }
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el = $('screen-'+id);
  el.classList.add('active');
  // 封面页：保证 BGM 播放
  if(id === 'cover') playBGM();
  // 简介浮现动画
  if(id === 'intro'){
    const t = $('intro-click');
    t.classList.remove('show');
    // 触发重绘后加动画
    void t.offsetWidth;
    requestAnimationFrame(()=>{ t.classList.add('show'); });
  }
}
function toast(msg){
  const t=$('toast'); t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2200);
}
function esc(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* ============ API ============ */
async function callAPI(messages){
  if(!state.apiKey){ toast('请先设置 API Key'); throw new Error('no key'); }
  const base = state.apiBase.replace(/\/$/,'');
  const url = base + '/v1/chat/completions';
  const res = await fetch(url, {
    method:'POST',
    headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer '+state.apiKey },
    body: JSON.stringify({ model: state.apiModel, messages, temperature:0.8, max_tokens:600 })
  });
  if(!res.ok){
    const txt = await res.text();
    toast('API错误: '+res.status);
    throw new Error('api '+res.status+' '+txt);
  }
  const data = await res.json();
  return data.choices[0].message.content.trim();
}

async function askVillager(question){
  const ci = state.caseIndex, chi = state.charIndex;
  const c = CASES[ci];
  const ch = c.characters[chi];
  // 使用合并的案件统一对话历史
  const hist = state.caseChat[ci] || [];

  // 把当前所有角色的信息拼入 system prompt
  const allChars = c.characters.map(x=>
    `【${x.name} · ${x.role}】\n 公开陈述：${x.statement}\n 暗情（仅GM知道，${x.name}自己不知道别人的暗情）：${x.secret}`
  ).join('\n\n');

  const targetTag = `本轮被询问的对象是：${ch.name}（${ch.role}），必须由他/她首先作答。`;

  const sysIntro = `你是文字推理游戏《村中有事》的GM，负责扮演本案中的所有NPC，并决定他们的插话时机。

【案件】${c.title}
【案件背景】${c.description}
${allChars}

【案件所有线索】${c.clues.map((x,i)=>(i+1)+'. '+x).join('\n')}

${targetTag}

对话规则：
1. 严格第一人称扮演，保持种族/身份/性格特征，说话自然简短（2-4句），NPC对玩家的称呼可以用"你"或尊称"村长"（自然即可）。
2. 每位NPC都可以隐瞒自己的秘密；只有当玩家拿出明确证据/线索直击要害，或连续追问时，才逐步松口。不要主动自爆暗情。
3. **只允许一次主回答**（由本轮被询问对象 ${ch.name} 作答）。
4. 插嘴规则（触发概率约 40%，不要每次都插嘴，但也不要太沉默）：
   - 若提问触及了其他角色的：**核心利益 / 家族或个人名誉 / 亲人爱人 / 秘密线索 / 族群矛盾 / 婚姻 / 产业归属 / 金钱 / 魔法契约 / 私人恩怨 / 旧伤执念**；
   - 或者本轮被问者的回答里，**指责、嫁祸、提到证据、说漏嘴、涉及他人隐私、歪曲事实**；
   - 只要满足以上任意一条，相关的 1-2 名角色必须插嘴（帮腔、辩解、吐槽、拆台、求情、替自己洗白、反驳指控等），内容 1-2 句即可，不重复主回答。
   - 只有当话题完全与其他人无关（比如单纯问他今年收成如何、日常作息、天气）时，interrupts 才返回空数组 []。
5. 严格返回如下JSON，不要任何额外文字，不要markdown代码块：
{
  "main": { "speaker": "${ch.name}", "content": "${ch.name}的主回答内容" },
  "interrupts": [
    { "speaker": "另一个角色名", "content": "插嘴内容，1-2句即可" }
  ]
}
如果确实无人插嘴，interrupts 必须是 []（空数组）。`;

  // 把合并的历史对话拼成消息
  const msgs = [{role:'system', content: sysIntro}];
  hist.forEach(h=>{
    if(h.speaker === 'user'){
      msgs.push({role:'user', content: h.content});
    }else{
      // 历史NPC说话：用assistant，标注一下说话人
      msgs.push({role:'assistant', content: `【${h.speaker}】${h.content}`});
    }
  });
  msgs.push({role:'user', content: question});

  const raw = await callAPI(msgs);
  let jsonStr = raw;
  const m = raw.match(/\{[\s\S]*\}/);
  if(m) jsonStr = m[0];
  try{
    const obj = JSON.parse(jsonStr);
    const result = [];
    if(obj.main && obj.main.content){
      // 强制主回答归属为当前被询问对象，防止模型把 speaker 写成别人
      result.push({speaker: ch.name, content: obj.main.content});
    }else{
      // 兜底：把原始整段当做主要回答
      result.push({speaker: ch.name, content: raw});
    }
    if(Array.isArray(obj.interrupts)){
      obj.interrupts.forEach(it=>{
        if(it && it.speaker && it.content) result.push({speaker: it.speaker, content: it.content});
      });
    }
    return result;
  }catch(e){
    return [{speaker: ch.name, content: raw}];
  }
}

async function judgeCase(judgment){
  const ci = state.caseIndex;
  const c = CASES[ci];

  // 收集本案统一对话流（用 caseChat）
  const chat = state.caseChat[ci] || [];
  let convSummary = '';
  if(chat.length){
    chat.forEach(item=>{
      const who = item.speaker === 'user' ? '你' : item.speaker;
      convSummary += `${who}：${item.content}\n`;
    });
  }else{
    convSummary = '（你未进行询问，直接作出决断）';
  }

  const allChars = c.characters.map(ch=>`${ch.name}（${ch.role}）陈述：${ch.statement}\n暗情：${ch.secret}`).join('\n\n');

  const sys = `你是一个叙事推演引擎，负责根据你在单个案件中的决断，推演该案件本身的事态演变与各方反应（暂不涉及村庄长期发展，长期发展将在所有案件结束后统一推演）。村民/角色称呼你为"村长"是自然的尊称，但**叙述视角一律使用"你"指代玩家，不要使用"村长"二字**。

【案件】${c.title}
【案件背景】${c.description}
【各方陈述与暗情】
${allChars}

【案件线索】${c.clues.map((x,i)=>(i+1)+'. '+x).join('\n')}

【你的询问记录】${convSummary}

你的决断如下：
"""${judgment}"""

请推演这一决断在本案范围内带来的后果。严格返回如下JSON（不要任何额外文字、不要markdown代码块）：
{
  "narrative": "该决断在本案中引发的具体事态演变与各方反应（3-5句，具体、有画面感，只讲本案本身的反应与后果。叙述人称使用"你"，不要出现"村长"二字，例如写"你宣布不让砍树后"而非"村长宣布不让砍树后"）"
}`;

  const raw = await callAPI([{role:'system', content:sys},{role:'user', content:'请推演并返回JSON。'}]);
  let jsonStr = raw;
  const m = raw.match(/\{[\s\S]*\}/);
  if(m) jsonStr = m[0];
  try {
    const obj = JSON.parse(jsonStr);
    return { narrative: obj.narrative || raw };
  }
  catch(e){ return { narrative: raw }; }
}

async function finalEnding(){
  // 切换到最终结局全屏页
  $('modal-result').classList.remove('active');
  showScreen('ending');
  $('ending-loading').style.display = '';
  $('ending-btns').style.display = 'none';
  $('ending-text').innerHTML = '';
  // 滚到顶部
  $('ending-scroll').scrollTop = 0;

  // 汇总所有案件
  let allDetail = '';
  state.history.forEach((h, i)=>{
    const c = CASES[i];
    allDetail += `===== 案件${i+1}「${c.title}」 =====\n`;
    allDetail += `【案件背景】${c.description}\n`;
    allDetail += `【各方信息】\n`;
    c.characters.forEach(ch=>{ allDetail += `- ${ch.name}（${ch.role}）：陈述「${ch.statement}」\n  暗情：${ch.secret}\n`; });
    allDetail += `【线索】${c.clues.map((x,idx)=>(idx+1)+'. '+x).join('；')}\n`;
    let conv = '';
    const chat = state.caseChat[i] || [];
    if(chat.length){
      chat.forEach(item=>{
        const who = item.speaker === 'user' ? '你' : item.speaker;
        conv += `「${who}：${item.content}」`;
      });
    }
    if(!conv) conv = '（未询问）';
    allDetail += `【你的询问】${conv}\n`;
    allDetail += `【你的决断】${h.judgment}\n`;
    allDetail += `【本案演变】${h.narrative}\n\n`;
  });

  const sys = `你是村庄发展推演引擎。你已经处理完所有案件，请基于全部决断、询问、线索与每一案的事态演变，综合推演村庄的整体发展方向、各族关系、产业变化与最终未来。
村民/角色尊称玩家为"村长"是自然的，**但叙述视角必须使用"你"指代玩家，不要出现"村长"叙述性称呼**。

【初始村庄状态】${state.villageState}

【全部案件的完整过程】
${allDetail}
请输出两层内容（两层合计控制在 500 字左右，450-550 字之间；两层长度要均衡，未来终章绝对不能只写几句就收尾；叙述始终使用"你"人称，有细节、有画面感）：
1）整体发展（约 230-280 字，不少于 4 句）：总览村庄在这些决断之后的气质变化——族群关系、经济、魔法生态、秩序、矛盾遗留、新产业或公共设施、重要角色的归宿。
2）未来终章（约 230-280 字，不少于 4 句）：数年之后，一个普通的日子，镜头扫过村庄的不同角落和人们的日常，让读者看到每一条线索的回响、每一次决断留下的痕迹，最后用一句点题的收束语点明村庄的命运。

请严格使用以下格式（两个小标题必须存在）：
【发展概览】
……
【未来终章】
……`;

  // 调用 API（带自动重试 + 内容完整性检测：总字数 450-550，两层各自 ≥150 字）
  let endingText = '';
  let attempt = 0, maxAttempt = 2;
  while(attempt < maxAttempt){
    attempt++;
    try{
      const raw = await callAPI([{role:'system', content:sys},{role:'user', content:'请开始推演，两层长度要均衡，不要让【未来终章】虎头蛇尾。'}]);
      // 完整性检测
      const t = raw.trim();
      const has1 = t.includes('发展概览');
      const has2 = t.includes('未来终章');
      let overview='', future='';
      if(has1 && has2){
        // 切分两段
        const i1 = t.search(/发展概览/);
        const i2 = t.search(/未来终章/);
        if(i1 < i2){
          overview = t.slice(i1, i2).replace(/^【?发展概览】?\s*[:：]?\s*/,'').trim();
          future   = t.slice(i2).replace(/^【?未来终章】?\s*[:：]?\s*/,'').trim();
        }
      }
      const totalLen = (overview + future).length;
      const ok = has1 && has2 && totalLen >= 420 && totalLen <= 620
              && overview.length >= 150 && future.length >= 150;
      if(!ok){
        if(attempt < maxAttempt){
          // 下一次重试前在 system prompt 末尾加一句提醒
          sys += '\n\n【补充要求】上一次输出两层长度不均衡或字数不够，本次请严格控制总字数 480-520 字，【发展概览】与【未来终章】两段必须各至少 180 字，且均为完整段落。';
          continue;
        }else{
          endingText = t; // 最后一次就算不完整也用
        }
      }else{
        endingText = t;
        break;
      }
    }catch(e){
      if(attempt >= maxAttempt){
        endingText = '【发展概览】\n群山与森林之间，村庄静静延续着它的日子；你的每一次决断，都像投入溪中的石子，如今已汇成它今日的模样。各族之间的关系、田地与工坊的收成、高塔上的灯火，都印着你处理每一桩纠纷时的选择。地精学会了与森林相处，兽人承担起护村之责，男巫安分守己地守着高塔，混血则在族群之间搭起了看不见的桥。\n【未来终章】\n多年之后，路过的旅人仍会在村口石桥上歇脚；他们望见金黄的麦田、闪着微光的高塔、飘着药香的小院，还有挑着担子的地精、沉默巡逻的兽人、在窗边调药的男巫，以及那个在族群间走家串户的混血身影。有人会笑着说一句闲话："这座村子嘛，不够完美，但从没有谁敢在这里掀桌——因为当年那位村长的裁决，至今还刻在每一个人心里。"';
      }
    }
  }

  // 隐藏 loading
  $('ending-loading').style.display = 'none';

  // 解析 & 渲染（整段淡入，不再逐字拆），返回所有动画完成所需总毫秒数
  const totalMs = renderEndingAnimated(endingText);

  // 动画全部播放完之后，再显示"存档/首页"按钮
  setTimeout(()=>{ $('ending-btns').style.display = 'flex'; }, totalMs + 200);
}

// 最终结局：按段落淡入动画；返回动画全部播放完所需总时长（毫秒）
function renderEndingAnimated(text){
  const box = $('ending-text');
  box.innerHTML = '';

  const sections = [];
  const pushSection = (heading, body)=>{
    if(heading || body) sections.push({heading, body});
  };

  const patterns = [/【?发展概览】?/, /【?未来终章】?/];
  const labels = ['发展概览', '未来终章'];

  // 找两个标题首次出现位置
  const firstIdx = findFirstIndex(text, patterns);
  // preamble: 正文之前可能有一段总起
  let remaining = text;
  let current = {heading:null, body:''};
  if(firstIdx.idx > 0){
    current.body = text.slice(0, firstIdx.idx).trim();
  }
  remaining = text.slice(firstIdx.idx);

  for(let i=0;i<patterns.length;i++){
    const nm = labels[i];
    const nextPattern = patterns[i+1];
    const re = new RegExp(`【?\\s*${nm}\\s*】?\\s*[:：]?\\s*`);
    const m = remaining.match(re);
    if(!m) continue;
    const pre = remaining.slice(0, m.index).trim();
    if(pre) current.body = (current.body?current.body+'\n':'') + pre;
    if(current.heading || current.body){ pushSection(current.heading, current.body); }
    remaining = remaining.slice(m.index + m[0].length);
    const nextIdx = nextPattern ? remaining.search(nextPattern) : -1;
    const body = (nextIdx >= 0 ? remaining.slice(0, nextIdx) : remaining).trim();
    current = {heading: nm, body};
  }
  if(current.heading || current.body){ pushSection(current.heading, current.body); }
  if(!sections.length){ pushSection(null, text); }

  // 按段落渲染：章节标题也作为一段参与动画序列
  const PARA_DELAY_MS = 220;   // 两段之间的 delay
  const CHAPTER_PAUSE_MS = 400; // 章节标题之后多停一点
  const FADE_DUR_MS = 900;      // 单段淡入时长（对应 CSS paraFade 0.9s）

  let elapsed = 0;
  sections.forEach(sec=>{
    // 章节标题
    if(sec.heading){
      const h = document.createElement('span');
      h.className = 'chapter';
      h.textContent = '【' + sec.heading + '】';
      // chapter 用跟 p 类似的动画，但是单独加 delay
      h.style.opacity = 0;
      h.style.transform = 'translateY(10px)';
      h.style.filter = 'blur(6px)';
      h.style.animation = `paraFade .9s cubic-bezier(.2,.7,.2,1) ${(elapsed/1000).toFixed(3)}s forwards`;
      box.appendChild(h);
      elapsed += CHAPTER_PAUSE_MS;
    }
    // body 按换行分段
    const paras = (sec.body || '').split(/\r?\n/).map(x=>x.trim()).filter(x=>x.length>0);
    paras.forEach(p=>{
      const para = document.createElement('p');
      para.style.textIndent = '2em';
      para.style.margin = '1vh 0';
      para.style.animationDelay = (elapsed/1000).toFixed(3) + 's';
      para.textContent = p;
      box.appendChild(para);
      elapsed += PARA_DELAY_MS;
    });
  });

  // 滚到顶部让用户从头看
  setTimeout(()=>{ $('ending-scroll').scrollTop = 0; }, 50);

  // 返回总时长（最后一段开始 delay + fade 时间）
  return elapsed - PARA_DELAY_MS + FADE_DUR_MS;
}
function findFirstIndex(str, patterns){
  let min = str.length, pi = -1;
  patterns.forEach((p,i)=>{
    const m = str.match(p);
    if(m && m.index < min){ min = m.index; pi = i; }
  });
  return {idx: min===str.length ? 0 : min, patternIndex: pi};
}

/* ============ 界面渲染 ============ */
function tagClass(role){
  if(role.indexOf('原告')>=0) return 'tag-plaintiff';
  if(role.indexOf('被告')>=0) return 'tag-defendant';
  return 'tag-party';
}
function tagLabel(role){
  if(role.indexOf('原告')>=0) return '原告';
  if(role.indexOf('被告')>=0) return '被告';
  return '当事';
}
function renderCase(){
  const c = CASES[state.caseIndex];
  $('case-title-text').textContent = c.title;

  // 计算当前案件角色名最长宽度（像素）
  const measurer = $('ask-target');
  // 取当前案件所有角色名中最长者（按字符数粗略即可，因中文字等宽）
  const allNames = c.characters.map(ch=>ch.name);
  const maxLen = Math.max(...allNames.map(n=>n.length));
  const longestName = allNames.reduce((a,b)=>a.length>=b.length?a:b, '');

  // 当事人立绘+陈述（同时展示，每张卡片左侧立绘、右侧阐述）
  const bar = $('parties-bar');
  bar.innerHTML = '';
  c.characters.forEach((ch, i)=>{
    const card = document.createElement('div');
    card.className = 'party-card' + (i===state.charIndex ? ' active' : '');
    card.innerHTML =
      `<img class="party-portrait" src="${ch.portrait}" alt="">
       <div class="party-content">
         <div class="party-head">
           <span class="party-name"><span class="party-tag ${tagClass(ch.role)}">${tagLabel(ch.role)}</span>${esc(ch.name)}</span>
           <span class="party-role">${esc(ch.role)}</span>
         </div>
         <div class="party-stmt">${esc(ch.statement)}</div>
       </div>`;
    card.onclick = ()=>{ state.charIndex = i; renderCase(); };
    bar.appendChild(card);
  });

  // 案件描述
  $('case-desc-text').textContent = c.description;

  // 当前提问对象（名字固定为最长名字的宽度，避免跳动）
  const ch = c.characters[state.charIndex];
  $('ask-target').innerHTML =
    '提问对象：<span class="target-name" style="display:inline-block;width:'+ maxLen +'ch;text-align:left;">' + esc(ch.name) + '</span>' +
    '<span class="target-hint">（点击上方立绘切换，涉及他人利益时会插嘴）</span>';

  // 对话历史：统一案件对话流，按说话人上色区分
  const hist = state.caseChat[state.caseIndex] || [];
  const box = $('conv-history');
  // 生成每个说话人的颜色
  const speakerColors = {};
  const palette = ['#e4b784','#8fb9d6','#b9d08e','#d9a2b0','#e3c97e','#9cc5bf','#c9a2e0','#d6a78c'];
  c.characters.forEach((chr, idx)=>{ speakerColors[chr.name] = palette[idx % palette.length]; });
  speakerColors['你'] = '#cfd9e6';
  box.innerHTML = hist.map(h=>{
    const isUser = h.speaker === 'user';
    const who = isUser ? '你' : h.speaker;
    const color = isUser ? speakerColors['你'] : (speakerColors[h.speaker] || '#d8c8a8');
    return `<div class="conv-item ${isUser?'user':'npc'}">
      <span class="who" style="color:${color};">${esc(who)}</span><br>
      <span class="what">${esc(h.content)}</span>
    </div>`;
  }).join('');
  box.scrollTop = box.scrollHeight;

  // 输入框状态
  const input = $('ask-input');
  const send = $('btn-send');
  input.disabled = false;
  send.disabled = false;
  input.placeholder = `向${ch.name}提问（可随时决断，询问无次数上限）`;
}

function showClues(){
  const c = CASES[state.caseIndex];
  const stage = $('clue-stage');
  stage.innerHTML = '';
  c.clues.forEach((clue, i)=>{
    const div = document.createElement('div');
    div.className = 'parchment';
    div.innerHTML = `<img src="assets/images/线索羊皮纸.png" alt=""><div class="clue-text">${esc(clue)}</div>`;
    stage.appendChild(div);
  });
  $('modal-clues').classList.add('active');
}

/* ============ 事件 ============ */
// 封面
$('btn-start').onclick = ()=>{
  if(!state.apiKey){ toast('请先设置 API Key'); showScreen('api'); $('api-key-input').focus(); return; }
  state.caseIndex = 0; state.charIndex = 0;
  state.caseChat = {}; state.villageState = '一座与世隔绝、各族混居的小村，平衡而脆弱，尚未有显著波动。';
  state.history = [];
  showScreen('intro');
};
$('btn-load').onclick = ()=>{ renderSaveList(); showScreen('load'); };
const PROVIDERS = {
  deepseek: { base:'https://api.deepseek.com', model:'deepseek-chat' },
  doubao:   { base:'https://ark.cn-beijing.volces.com/api/v3', model:'ep-20250101000000-xxxxx' },
  kimi:     { base:'https://api.moonshot.cn', model:'moonshot-v1-8k' },
  tongyi:   { base:'https://dashscope.aliyuncs.com/compatible-mode', model:'qwen-plus' },
  glm:      { base:'https://open.bigmodel.cn/api/paas/v4', model:'glm-4' },
  custom:   { base:'', model:'' }
};
$('btn-api').onclick = ()=>{
  showScreen('api');
  $('api-key-input').value = state.apiKey;
  // 尝试匹配已知服务商
  let matched = 'custom';
  for(const k in PROVIDERS){
    if(k==='custom') continue;
    if(state.apiBase === PROVIDERS[k].base){ matched = k; break; }
  }
  $('api-provider').value = matched;
  if(matched !== 'custom'){
    $('api-base-input').value = PROVIDERS[matched].base;
    $('api-model-input').value = PROVIDERS[matched].model;
  } else {
    $('api-base-input').value = state.apiBase;
    $('api-model-input').value = state.apiModel;
  }
};
$('api-provider').onchange = ()=>{
  const p = $('api-provider').value;
  if(p !== 'custom'){
    $('api-base-input').value = PROVIDERS[p].base;
    $('api-model-input').value = PROVIDERS[p].model;
  }
};

// API设置
$('api-save').onclick = ()=>{
  state.apiKey = $('api-key-input').value.trim();
  state.apiBase = $('api-base-input').value.trim() || 'https://api.deepseek.com';
  state.apiModel = $('api-model-input').value.trim() || 'deepseek-chat';
  localStorage.setItem('apiKey', state.apiKey);
  localStorage.setItem('apiBase', state.apiBase);
  localStorage.setItem('apiModel', state.apiModel);
  toast('API 设置已保存');
  showScreen('cover');
};
$('api-back').onclick = ()=> showScreen('cover');

// 简介：整屏任意位置点击进入下一案件（排除右上角喇叭按钮）
$('screen-intro').addEventListener('click', (e)=>{
  if(e.target.closest('#btn-bgm')) return; // 点喇叭不进下一页
  showScreen('case');
  renderCase();
});

// 简单的睡眠工具
const sleep = (ms)=> new Promise(r=>setTimeout(r, ms));

// 询问
async function sendAsk(){
  const input = $('ask-input');
  const q = input.value.trim();
  if(!q) return;
  const ci = state.caseIndex;
  if(!state.caseChat[ci]) state.caseChat[ci] = [];
  state.caseChat[ci].push({speaker:'user', content:q});
  input.value = '';
  input.disabled = true;
  $('btn-send').disabled = true;
  $('btn-send').innerHTML = '<span class="loading"></span>';
  renderCase();
  try{
    const replies = await askVillager(q);
    // 逐条出现，间隔 900ms（含主要回答与插嘴），模拟一个一个说
    for(let i=0;i<replies.length;i++){
      state.caseChat[ci].push({speaker: replies[i].speaker, content: replies[i].content});
      renderCase();
      if(i < replies.length - 1) await sleep(900);
    }
  }catch(e){
    state.caseChat[ci].pop();
    toast('询问失败，请重试');
  }
  $('btn-send').innerHTML = '询问';
  input.disabled = false;
  $('btn-send').disabled = false;
  renderCase();
  input.focus();
}
$('btn-send').onclick = sendAsk;
$('ask-input').addEventListener('keydown', e=>{ if(e.key==='Enter') sendAsk(); });

// 线索
$('btn-clues').onclick = showClues;
// 整屏点击关闭线索弹窗。羊皮纸本身可以点击不阻断，但父级 overlay 捕获后关闭
$('modal-clues').addEventListener('click', (e)=>{
  // 只在点击 overlay / clue-stage 容器或关闭提示时关闭，点羊皮纸内容也可关（用户要求"点击屏幕即可关闭"）
  $('modal-clues').classList.remove('active');
});

// 决断
$('btn-judge').onclick = ()=>{ $('judge-input').value=''; $('modal-judge').classList.add('active'); };
$('judge-cancel').onclick = ()=> $('modal-judge').classList.remove('active');
$('judge-confirm').onclick = async ()=>{
  const j = $('judge-input').value.trim();
  if(!j){ toast('请写下你的决断'); return; }
  $('judge-confirm').innerHTML = '<span class="loading"></span> 推演中';
  $('judge-confirm').disabled = true;
  try{
    const r = await judgeCase(j);
    // 单案件仅推演本案事态，不更新村庄状态，村庄发展统一在最后推
    state.history.push({ narrative: r.narrative, judgment:j });
    $('modal-judge').classList.remove('active');
    $('result-narrative').textContent = r.narrative;
    $('result-title').textContent = '决断之后 · ' + CASES[state.caseIndex].title;
    const isLast = state.caseIndex >= CASES.length - 1;
    $('result-next').textContent = isLast ? '村庄后续' : '继续';
    $('modal-result').classList.add('active');
  }catch(e){
    toast('推演失败，请重试');
  }
  $('judge-confirm').innerHTML = '提交';
  $('judge-confirm').disabled = false;
};

// 结果"继续" / "村庄后续"按钮
$('result-next').onclick = async ()=>{
  $('modal-result').classList.remove('active');
  if(state.caseIndex < CASES.length - 1){
    state.caseIndex++;
    state.charIndex = 0;
    renderCase();
    showScreen('case');
  }else{
    // 最后一案 → 直接最终推演（主场景背景）
    await finalEnding();
  }
};

$('ending-restart').onclick = ()=>{ showScreen('cover'); };
$('ending-save').onclick = ()=> openSavePicker();

// 通用确认弹窗
function showConfirm(title, text, okText='确定'){
  return new Promise(resolve=>{
    $('confirm-title').textContent = title || '请确认';
    $('confirm-text').textContent = text || '';
    $('confirm-ok').textContent = okText;
    $('modal-confirm').classList.add('active');
    const ok = $('confirm-ok'), no = $('confirm-cancel');
    const done = (result)=>{ $('modal-confirm').classList.remove('active');
      ok.onclick = null; no.onclick = null; resolve(result); };
    ok.onclick = ()=> done(true);
    no.onclick = ()=> done(false);
  });
}

// 存档
const SAVE_SLOT_COUNT = 6;
function getSaveSlots(){ return JSON.parse(localStorage.getItem('saveSlots') || '[]'); }
function setSaveSlots(slots){ localStorage.setItem('saveSlots', JSON.stringify(slots)); }

function getSaveData(){
  return {
    caseIndex: state.caseIndex,
    charIndex: state.charIndex,
    caseChat: state.caseChat,
    villageState: state.villageState,
    history: state.history,
    time: new Date().toLocaleString('zh-CN')
  };
}
// 统一的存档卡片渲染器（供 save picker 和 load list 使用）
function slotCardHTML(slotIndex, s, actions){
  if(!s){
    // 空槽位
    return `<div style="display:flex;align-items:center;justify-content:space-between;padding:1.5vh 1.2vw;border:1px dashed rgba(180,150,100,0.25);border-radius:6px;gap:1vw;">
      <div style="color:#7a6f5a;font-size:.88rem;">
        <div style="font-weight:600;letter-spacing:1px;color:#9a8e76;">坑位 ${slotIndex+1} · 空</div>
        <div style="margin-top:.3vh;font-size:.74rem;color:#6c6151;">尚无存档</div>
      </div>
      <div style="display:flex;gap:.6vw;">${actions}</div>
    </div>`;
  }
  const caseName = CASES[s.caseIndex] ? CASES[s.caseIndex].title : '未知';
  return `<div style="display:flex;align-items:center;justify-content:space-between;padding:1.5vh 1.2vw;border:1px solid rgba(180,150,100,0.2);border-radius:6px;background:rgba(30,25,15,.25);gap:1vw;">
    <div>
      <div style="color:#e4d3b0;font-size:.94rem;font-weight:600;">
        <span style="color:#c9a878;font-weight:400;margin-right:.8vw;letter-spacing:1px;">坑位 ${slotIndex+1}</span>${caseName}
      </div>
      <div style="color:#8a7e66;font-size:.76rem;margin-top:.3vh;">${s.time||''} · 已决断 ${s.history?.length||0}/4 · 询问不设上限</div>
    </div>
    <div style="display:flex;gap:.6vw;">${actions}</div>
  </div>`;
}

// 存档弹框：显示 6 个坑位，空或已有存档都可覆盖写入
function openSavePicker(){
  const slots = getSaveSlots();
  const data = getSaveData();
  const stage = $('save-slots');
  let html = '';
  for(let i=0;i<SAVE_SLOT_COUNT;i++){
    const s = slots[i];
    const btnLabel = s ? `<span style="color:#e4c98a;">覆盖写入</span>` : `存入`;
    const actions = `<button class="btn save-slot-btn" data-idx="${i}" style="padding:.9vh 1.4vw;font-size:.82rem;">${btnLabel}</button>`;
    html += slotCardHTML(i, s, actions);
  }
  stage.innerHTML = html;
  stage.querySelectorAll('.save-slot-btn').forEach(b=>{
    b.onclick = async ()=>{
      const idx = parseInt(b.dataset.idx);
      const cur = getSaveSlots();
      const old = cur[idx];
      let canWrite = true;
      if(old){
        canWrite = await showConfirm('覆盖存档？', `坑位 ${idx+1} 已有存档（${CASES[old.caseIndex]?.title||'未知'}，${old.time||''}），确定覆盖吗？`, '覆盖');
      }
      if(canWrite){
        cur[idx] = data;
        setSaveSlots(cur);
        $('modal-save').classList.remove('active');
        toast(`已保存至坑位 ${idx+1}`);
      }
    };
  });
  $('modal-save').classList.add('active');
}
$('save-picker-cancel').onclick = ()=> $('modal-save').classList.remove('active');
$('btn-save').onclick = ()=> openSavePicker();

// 读档列表（显示 6 个坑位，空槽灰显；非空可读取 / 删除）
function renderSaveList(){
  const slots = getSaveSlots();
  const list = $('save-list');
  let html = '';
  let anyExist = false;
  for(let i=0;i<SAVE_SLOT_COUNT;i++){
    const s = slots[i];
    if(s) anyExist = true;
    if(!s){
      html += slotCardHTML(i, null, '');
    }else{
      const actions =
        `<button class="btn" data-load="${i}" style="padding:.9vh 1.2vw;font-size:.82rem;">读取</button>` +
        `<button class="btn" data-del="${i}" style="padding:.9vh 1.2vw;font-size:.82rem;background:rgba(100,40,30,.25);border-color:rgba(200,120,90,.35);color:#f2c8b6;">删除</button>`;
      html += slotCardHTML(i, s, actions);
    }
  }
  list.innerHTML = html;
  if(!anyExist){
    list.innerHTML += '<div style="color:#8a7e66;text-align:center;padding:2vh 0 0 0;font-size:.8rem;">（所有坑位均为空）</div>';
  }
  list.querySelectorAll('button[data-load]').forEach(b=>{
    b.onclick = ()=> loadSlot(parseInt(b.dataset.load));
  });
  list.querySelectorAll('button[data-del]').forEach(b=>{
    b.onclick = async ()=>{
      const i = parseInt(b.dataset.del);
      const cur = getSaveSlots();
      const s = cur[i];
      if(!s) return;
      const caseName = CASES[s.caseIndex]?.title || '未知';
      const ok = await showConfirm('删除存档？', `坑位 ${i+1}（${caseName}，${s.time||''}）将被删除，且无法恢复。`, '确认删除');
      if(!ok) return;
      cur.splice(i, 1);
      setSaveSlots(cur);
      toast('存档已删除');
      renderSaveList();
    };
  });
}

function loadSlot(i){
  const slots = getSaveSlots();
  const s = slots[i];
  if(!s) return;
  if(!state.apiKey){ toast('请先设置 API Key'); showScreen('api'); return; }
  state.caseIndex = s.caseIndex || 0;
  state.charIndex = s.charIndex || 0;
  state.caseChat = s.caseChat || {};
  // 兼容老存档：若存在 conversations 旧格式，自动迁移为 caseChat
  if(!s.caseChat && s.conversations){
    const out = {};
    Object.keys(s.conversations).forEach(cid=>{
      const [ciStr, chiStr] = cid.split('_');
      const ci = parseInt(ciStr), chi = parseInt(chiStr);
      if(!out[ci]) out[ci] = [];
      (s.conversations[cid]||[]).forEach(item=>{
        const name = CASES[ci].characters[chi]?.name || '村民';
        out[ci].push({ speaker: item.role==='user' ? 'user' : name, content: item.content });
      });
    });
    state.caseChat = out;
  }
  state.villageState = s.villageState || state.villageState;
  state.history = s.history || [];
  showScreen('case');
  renderCase();
  toast('存档已读取');
}
$('load-back').onclick = ()=> showScreen('cover');

// 封面按钮精确位置：基于背景图natural尺寸和cover裁剪比例计算
// 三个按钮在原图中的垂直中心位置比例（根据红框标定）
function layoutCoverBtns(){
  const img = $('cover-bg');
  const btns = $('cover-btns');
  if(!img || !btns) return;
  if(!img.naturalWidth) { img.addEventListener('load', layoutCoverBtns, {once:true}); return; }
  const vw = window.innerWidth, vh = window.innerHeight;
  const iw = img.naturalWidth, ih = img.naturalHeight;
  // cover模式：计算缩放比例和裁剪偏移
  const scale = Math.max(vw/iw, vh/ih);
  const dispW = iw * scale, dispH = ih * scale;
  const cropX = (dispW - vw) / 2; // 水平裁剪量（左侧被裁掉的像素）
  const cropY = (dispH - vh) / 2; // 垂直裁剪量（上方被裁掉的像素）
  // 三个按钮在原图中的Y位置比例（开始游戏往下一点，三按钮更靠近）
  const btnRatios = [0.59, 0.70, 0.81]; // 开始游戏、读取存档、API Key
  const btnElems = btns.querySelectorAll('.cover-btn');
  // 水平位置（居中）
  const centerX = vw / 2;
  // 按钮宽度（稍微放大）
  const btnW = Math.round(iw * 0.13 * scale);
  btnElems.forEach((b, idx) => {
    const btnYinImg = ih * btnRatios[idx];
    const btnYinViewport = btnYinImg * scale - cropY;
    b.style.position = 'absolute';
    b.style.left = centerX + 'px';
    b.style.top = btnYinViewport + 'px';
    b.style.transform = 'translate(-50%,-50%)';
    b.style.width = btnW + 'px';
    b.style.height = 'auto';
  });
  // 清除容器的flex布局样式
  btns.style.gap = '0';
  btns.style.left = '0';
  btns.style.top = '0';
  btns.style.width = '100%';
  btns.style.height = '100%';
  btns.style.transform = 'none';
}
window.addEventListener('load', layoutCoverBtns);
window.addEventListener('resize', layoutCoverBtns);
/* ============ BGM 控制 ============ */
function playBGM(){
  const bgm = $('bgm');
  if(!bgm || bgm.muted) return;
  const p = bgm.play();
  if(p && p.catch) p.catch(()=>{});
}
function initBGM(){
  const bgm = $('bgm');
  const btn = $('btn-bgm');
  if(!bgm || !btn) return;
  bgm.volume = 0.55;
  // 每次刷新默认不静音（状态仅用于当次会话记忆，不持久化到 localStorage）
  bgm.muted = false;
  updateBgmBtn();

  function updateBgmBtn(){
    if(bgm.muted){
      btn.textContent = '🔇';
      btn.classList.add('muted');
      btn.title = '取消静音';
    }else{
      btn.textContent = '🔊';
      btn.classList.remove('muted');
      btn.title = '静音';
    }
  }
  btn.onclick = ()=>{
    bgm.muted = !bgm.muted;
    updateBgmBtn();
    if(!bgm.muted) playBGM();
  };
  // 持久监听：任何用户交互（点击/按键/触摸）都尝试播放，
  // 直到 BGM 真正进入 playing 状态后自动停止监听
  let locked = true;
  function unlock(){
    playBGM();
    setTimeout(()=>{
      if(!bgm.paused) locked = false;
    }, 200);
    if(!locked){
      document.removeEventListener('click', unlock, true);
      document.removeEventListener('keydown', unlock, true);
      document.removeEventListener('touchstart', unlock, true);
    }
  }
  document.addEventListener('click', unlock, true);
  document.addEventListener('keydown', unlock, true);
  document.addEventListener('touchstart', unlock, true);
  // 页面加载后立刻尝试（如果策略允许）
  playBGM();
}

document.addEventListener('DOMContentLoaded', ()=>{
  initBGM();
  if($('cover-bg')?.complete) layoutCoverBtns();
});

// 初始化：保持封面（?reset=1 已在上方清除旧 Key；无 Key 时点开始游戏会引导填写）
