/**
 * 地区
 * ==================================================================
 * Cascader 级联选择: http://v2.iviewui.com/components/cascader
 * Tree 树形控件: http://v2.iviewui.com/components/tree
 * ==================================================================
 * Created by Duyb on 2018/11/19.
 */

export const DISTRICT_DATA = [
  {
    label: '中国',
    value: 'CN',
    children: [
      {
        label: '安徽',
        value: 'CN_Anhui',
        children: [
          {
            label: '安庆',
            value: 'CN_Anhui_Anqing',
          },
          {
            label: '蚌埠',
            value: 'CN_Anhui_Bengbu',
          },
          {
            label: '亳州',
            value: 'CN_Anhui_Bozhou',
          },
          {
            label: '巢湖',
            value: 'CN_Anhui_Chaohu',
          },
          {
            label: '滁州',
            value: 'CN_Anhui_Chuzhou',
          },
          {
            label: '池州',
            value: 'CN_Anhui_Chizhou',
          },
          {
            label: '阜阳',
            value: 'CN_Anhui_Fuyang',
          },
          {
            label: '淮北',
            value: 'CN_Anhui_Huaibei',
          },
          {
            label: '合肥',
            value: 'CN_Anhui_Hefei',
          },
          {
            label: '淮南',
            value: 'CN_Anhui_Huainan',
          },
          {
            label: '黄山',
            value: 'CN_Anhui_Huangshan',
          },
          {
            label: '六安',
            value: 'CN_Anhui_Luan',
          },
          {
            label: '马鞍山',
            value: 'CN_Anhui_MOS',
          },
          {
            label: '宿州',
            value: 'CN_Anhui_Suzhou',
          },
          {
            label: '铜陵',
            value: 'CN_Anhui_Tongling',
          },
          {
            label: '芜湖',
            value: 'CN_Anhui_Wuhu',
          },
          {
            label: '宣城',
            value: 'CN_Anhui_Xuancheng',
          },
        ],
      },
      {
        label: '澳门',
        value: 'CN_Macao',
        children: [
          {
            label: '大堂区',
            value: 'CN_Macao_Cathedral',
          },
          {
            label: '氹仔',
            value: 'CN_Macao_Taipa',
          },
          {
            label: '风顺堂区',
            value: 'CN_Macao_St. Lawrence',
          },
          {
            label: '花地玛堂区',
            value: 'CN_Macao_Fatima',
          },
          {
            label: '路环岛',
            value: 'CN_Macao_Coloane',
          },
          {
            label: '圣安多尼堂区',
            value: 'CN_Macao_St. Anthony',
          },
          {
            label: '望德堂区',
            value: 'CN_Macao_St. Lazarus',
          },
        ],
      },
      {
        label: '北京',
        value: 'CN_Beijing',
        children: [
          {
            label: '昌平',
            value: 'CN_Beijing_Changping',
          },
          {
            label: '朝阳',
            value: 'CN_Beijing_Chaoyang',
          },
          {
            label: '东城',
            value: 'CN_Beijing_East',
          },
          {
            label: '大兴',
            value: 'CN_Beijing_Daxing',
          },
          {
            label: '房山',
            value: 'CN_Beijing_Fangshan',
          },
          {
            label: '丰台',
            value: 'CN_Beijing_Fengtai',
          },
          {
            label: '海淀',
            value: 'CN_Beijing_Haidian',
          },
          {
            label: '怀柔',
            value: 'CN_Beijing_Huairou',
          },
          {
            label: '门头沟',
            value: 'CN_Beijing_Mentougou',
          },
          {
            label: '密云',
            value: 'CN_Beijing_Miyun',
          },
          {
            label: '平谷',
            value: 'CN_Beijing_Pinggu',
          },
          {
            label: '石景山',
            value: 'CN_Beijing_Shijingshan',
          },
          {
            label: '顺义',
            value: 'CN_Beijing_Shunyi',
          },
          {
            label: '通州',
            value: 'CN_Beijing_Tongzhou',
          },
          {
            label: '西城',
            value: 'CN_Beijing_West',
          },
          {
            label: '延庆',
            value: 'CN_Beijing_Yanqing',
          },
        ],
      },
      {
        label: '重庆',
        value: 'CN_Chongqing',
        children: [
          {
            label: '北碚',
            value: 'CN_Chongqing_Beibei',
          },
          {
            label: '巴南',
            value: 'CN_Chongqing_Banan',
          },
          {
            label: '璧山',
            value: 'CN_Chongqing_Bishan',
          },
          {
            label: '城口',
            value: 'CN_Chongqing_Chengkou',
          },
          {
            label: '长寿',
            value: 'CN_Chongqing_longevity',
          },
          {
            label: '大渡口',
            value: 'CN_Chongqing_Dadukou',
          },
          {
            label: '垫江',
            value: 'CN_Chongqing_Dianjiang',
          },
          {
            label: '大足',
            value: 'CN_Chongqing_Dazu',
          },
          {
            label: '丰都',
            value: 'CN_Chongqing_Fengdu',
          },
          {
            label: '奉节',
            value: 'CN_Chongqing_Fengjie',
          },
          {
            label: '涪陵',
            value: 'CN_Chongqing_Fuling',
          },
          {
            label: '合川',
            value: 'CN_Chongqing_Aikawa',
          },
          {
            label: '江北',
            value: 'CN_Chongqing_Jiangbei',
          },
          {
            label: '江津',
            value: 'CN_Chongqing_Jiangjin',
          },
          {
            label: '九龙坡',
            value: 'CN_Chongqing_Jiulongpo',
          },
          {
            label: '开县',
            value: 'CN_Chongqing_Kaixian',
          },
          {
            label: '两江新区',
            value: 'CN_Chongqing_Two Rivers',
          },
          {
            label: '梁平',
            value: 'CN_Chongqing_Liangping',
          },
          {
            label: '南岸',
            value: 'CN_Chongqing_South Bank',
          },
          {
            label: '南川',
            value: 'CN_Chongqing_Nanchuan',
          },
          {
            label: '彭水',
            value: 'CN_Chongqing_Pengshui',
          },
          {
            label: '綦江',
            value: 'CN_Chongqing_Qijiang',
          },
          {
            label: '黔江',
            value: 'CN_Chongqing_Qianjiang',
          },
          {
            label: '荣昌',
            value: 'CN_Chongqing_Rongchang',
          },
          {
            label: '沙坪坝',
            value: 'CN_Chongqing_Shapingba',
          },
          {
            label: '双桥',
            value: 'CN_Chongqing_Shuangqiao',
          },
          {
            label: '石柱',
            value: 'CN_Chongqing_columns',
          },
          {
            label: '铜梁',
            value: 'CN_Chongqing_Tongliang',
          },
          {
            label: '潼南',
            value: 'CN_Chongqing_Tongnan',
          },
          {
            label: '武隆',
            value: 'CN_Chongqing_Wulong',
          },
          {
            label: '巫山',
            value: 'CN_Chongqing_Wushan',
          },
          {
            label: '万盛',
            value: 'CN_Chongqing_Pine Valley',
          },
          {
            label: '巫溪',
            value: 'CN_Chongqing_Wuxi',
          },
          {
            label: '万州',
            value: 'CN_Chongqing_Wanzhou',
          },
          {
            label: '秀山',
            value: 'CN_Chongqing_Xiushan',
          },
          {
            label: '渝北',
            value: 'CN_Chongqing_Yubei',
          },
          {
            label: '永川',
            value: 'CN_Chongqing_Yongchuan',
          },
          {
            label: '酉阳',
            value: 'CN_Chongqing_Youyang',
          },
          {
            label: '云阳',
            value: 'CN_Chongqing_Yunyang',
          },
          {
            label: '渝中',
            value: 'CN_Chongqing_Yuzhong',
          },
          {
            label: '忠县',
            value: 'CN_Chongqing_Zhongxian',
          },
        ],
      },
      {
        label: '福建',
        value: 'CN_Fujian',
        children: [
          {
            label: '福州',
            value: 'CN_Fujian_Fuzhou',
          },
          {
            label: '龙岩',
            value: 'CN_Fujian_Longyan',
          },
          {
            label: '宁德',
            value: 'CN_Fujian_Ningde',
          },
          {
            label: '南平',
            value: 'CN_Fujian_Nanping',
          },
          {
            label: '莆田',
            value: 'CN_Fujian_Putian',
          },
          {
            label: '泉州',
            value: 'CN_Fujian_Quanzhou',
          },
          {
            label: '厦门',
            value: 'CN_Fujian_Xiamen',
          },
          {
            label: '三明',
            value: 'CN_Fujian_Sanming',
          },
          {
            label: '漳州',
            value: 'CN_Fujian_Zhangzhou',
          },
        ],
      },
      {
        label: '广东',
        value: 'CN_Guangdong',
        children: [
          {
            label: '潮州',
            value: 'CN_Guangdong_Chaozhou',
          },
          {
            label: '东莞',
            value: 'CN_Guangdong_Dongguan',
          },
          {
            label: '佛山',
            value: 'CN_Guangdong_Foshan',
          },
          {
            label: '广州',
            value: 'CN_Guangdong_Guangzhou',
          },
          {
            label: '河源',
            value: 'CN_Guangdong_Heyuan',
          },
          {
            label: '惠州',
            value: 'CN_Guangdong_Huizhou',
          },
          {
            label: '江门',
            value: 'CN_Guangdong_Jiangmen',
          },
          {
            label: '揭阳',
            value: 'CN_Guangdong_Jieyang',
          },
          {
            label: '茂名',
            value: 'CN_Guangdong_Maoming',
          },
          {
            label: '梅州',
            value: 'CN_Guangdong_Meizhou',
          },
          {
            label: '清远',
            value: 'CN_Guangdong_Qingyuan',
          },
          {
            label: '韶关',
            value: 'CN_Guangdong_Shaoguan',
          },
          {
            label: '汕头',
            value: 'CN_Guangdong_Shantou',
          },
          {
            label: '汕尾',
            value: 'CN_Guangdong_Shanwei',
          },
          {
            label: '深圳',
            value: 'CN_Guangdong_Shenzhen',
          },
          {
            label: '云浮',
            value: 'CN_Guangdong_Yunfu',
          },
          {
            label: '阳江',
            value: 'CN_Guangdong_Yangjiang',
          },
          {
            label: '珠海',
            value: 'CN_Guangdong_Zhuhai',
          },
          {
            label: '湛江',
            value: 'CN_Guangdong_Zhanjiang',
          },
          {
            label: '肇庆',
            value: 'CN_Guangdong_Zhaoqing',
          },
          {
            label: '中山',
            value: 'CN_Guangdong_Zhongshan',
          },
        ],
      },
      {
        label: '甘肃',
        value: 'CN_Gansu',
        children: [
          {
            label: '白银',
            value: 'CN_Gansu_Silver',
          },
          {
            label: '定西',
            value: 'CN_Gansu_Dingxi',
          },
          {
            label: '甘南',
            value: 'CN_Gansu_Gannan',
          },
          {
            label: '金昌',
            value: 'CN_Gansu_Jinchang',
          },
          {
            label: '酒泉',
            value: 'CN_Gansu_Jiuquan',
          },
          {
            label: '嘉峪关',
            value: 'CN_Gansu_Jiayuguan',
          },
          {
            label: '陇南',
            value: 'CN_Gansu_Longnan',
          },
          {
            label: '临夏',
            value: 'CN_Gansu_Linxia',
          },
          {
            label: '兰州市',
            value: 'CN_Gansu_Lanzhou',
          },
          {
            label: '平凉',
            value: 'CN_Gansu_Pingliang',
          },
          {
            label: '庆阳',
            value: 'CN_Gansu_Qingyang',
          },
          {
            label: '天水',
            value: 'CN_Gansu_Tin Shui',
          },
          {
            label: '武威',
            value: 'CN_Gansu_Wuwei',
          },
          {
            label: '张掖',
            value: 'CN_Gansu_Zhangye',
          },
        ],
      },
      {
        label: '广西',
        value: 'CN_Guangxi',
        children: [
          {
            label: '北海',
            value: 'CN_Guangxi_Beihai',
          },
          {
            label: '百色',
            value: 'CN_Guangxi_Baise',
          },
          {
            label: '崇左',
            value: 'CN_Guangxi_Chongzuo',
          },
          {
            label: '防城港',
            value: 'CN_Guangxi_Fangchenggang',
          },
          {
            label: '贵港',
            value: 'CN_Guangxi_Guigang',
          },
          {
            label: '桂林',
            value: 'CN_Guangxi_Guilin',
          },
          {
            label: '河池',
            value: 'CN_Guangxi_Hechi',
          },
          {
            label: '贺州',
            value: 'CN_Guangxi_Hezhou',
          },
          {
            label: '来宾',
            value: 'CN_Guangxi_guests',
          },
          {
            label: '柳州',
            value: 'CN_Guangxi_Liuzhou',
          },
          {
            label: '南宁',
            value: 'CN_Guangxi_Nanning',
          },
          {
            label: '钦州',
            value: 'CN_Guangxi_Chow',
          },
          {
            label: '梧州',
            value: 'CN_Guangxi_Wuzhou',
          },
          {
            label: '玉林',
            value: 'CN_Guangxi_Yulin',
          },
        ],
      },
      {
        label: '贵州',
        value: 'CN_Guizhou',
        children: [
          {
            label: '安顺',
            value: 'CN_Guizhou_Anshun',
          },
          {
            label: '毕节',
            value: 'CN_Guizhou_Bijie',
          },
          {
            label: '贵阳',
            value: 'CN_Guizhou_Guiyang',
          },
          {
            label: '六盘水',
            value: 'CN_Guizhou_Liupanshui',
          },
          {
            label: '黔东南',
            value: 'CN_Guizhou_Southeast',
          },
          {
            label: '黔南',
            value: 'CN_Guizhou_South Guizhou',
          },
          {
            label: '黔西南',
            value: 'CN_Guizhou_Southwest Guizhou',
          },
          {
            label: '铜仁',
            value: 'CN_Guizhou_Tongren',
          },
          {
            label: '遵义',
            value: 'CN_Guizhou_Lawrence',
          },
        ],
      },
      {
        label: '河北',
        value: 'CN_Hebei',
        children: [
          {
            label: '保定',
            value: 'CN_Hebei_Baoding',
          },
          {
            label: '承德',
            value: 'CN_Hebei_Chengde',
          },
          {
            label: '沧州',
            value: 'CN_Hebei_Cangzhou',
          },
          {
            label: '邯郸',
            value: 'CN_Hebei_Handan',
          },
          {
            label: '衡水',
            value: 'CN_Hebei_Hengshui',
          },
          {
            label: '廊坊',
            value: 'CN_Hebei_Langfang',
          },
          {
            label: '秦皇岛',
            value: 'CN_Hebei_Qinhuangdao',
          },
          {
            label: '石家庄',
            value: 'CN_Hebei_Shijiazhuang',
          },
          {
            label: '唐山',
            value: 'CN_Hebei_Tangshan',
          },
          {
            label: '邢台',
            value: 'CN_Hebei_Xingtai',
          },
          {
            label: '张家口',
            value: 'CN_Hebei_Zhangjiakou',
          },
        ],
      },
      {
        label: '湖北',
        value: 'CN_Hubei',
        children: [
          {
            label: '恩施',
            value: 'CN_Hubei_Enshi',
          },
          {
            label: '鄂州',
            value: 'CN_Hubei_Ezhou',
          },
          {
            label: '黄冈',
            value: 'CN_Hubei_Huanggang',
          },
          {
            label: '黄石',
            value: 'CN_Hubei_Yellowstone',
          },
          {
            label: '荆门',
            value: 'CN_Hubei_Jingmen',
          },
          {
            label: '荆州',
            value: 'CN_Hubei_Jingzhou',
          },
          {
            label: '潜江',
            value: 'CN_Hubei_Qianjiang',
          },
          {
            label: '神农架',
            value: 'CN_Hubei_Shennongjia',
          },
          {
            label: '十堰',
            value: 'CN_Hubei_Shiyan',
          },
          {
            label: '随州',
            value: 'CN_Hubei_Suizhou',
          },
          {
            label: '天门',
            value: 'CN_Hubei_Tianmen',
          },
          {
            label: '武汉',
            value: 'CN_Hubei_Wuhan',
          },
          {
            label: '孝感',
            value: 'CN_Hubei_Xiaogan',
          },
          {
            label: '咸宁',
            value: 'CN_Hubei_Xianning',
          },
          {
            label: '仙桃',
            value: 'CN_Hubei_Bristol',
          },
          {
            label: '襄阳',
            value: 'CN_Hubei_Yangyang',
          },
          {
            label: '宜昌',
            value: 'CN_Hubei_Yichang',
          },
        ],
      },
      {
        label: '黑龙江',
        value: 'CN_Heilongjiang',
        children: [
          {
            label: '大庆',
            value: 'CN_Heilongjiang_Daqing',
          },
          {
            label: '大兴安岭',
            value: 'CN_Heilongjiang_Mountains',
          },
          {
            label: '哈尔滨',
            value: 'CN_Heilongjiang_Harbin',
          },
          {
            label: '鹤岗',
            value: 'CN_Heilongjiang_Hegang',
          },
          {
            label: '黑河',
            value: 'CN_Heilongjiang_Heihe',
          },
          {
            label: '佳木斯',
            value: 'CN_Heilongjiang_Jiamusi',
          },
          {
            label: '鸡西',
            value: 'CN_Heilongjiang_Jixi',
          },
          {
            label: '牡丹江',
            value: 'CN_Heilongjiang_Mudanjiang',
          },
          {
            label: '齐齐哈尔',
            value: 'CN_Heilongjiang_Qiqihar',
          },
          {
            label: '七台河',
            value: 'CN_Heilongjiang_Qitaihe',
          },
          {
            label: '绥化',
            value: 'CN_Heilongjiang_Suihua',
          },
          {
            label: '双鸭山',
            value: 'CN_Heilongjiang_Shuangyashan',
          },
          {
            label: '伊春',
            value: 'CN_Heilongjiang_Yichun',
          },
        ],
      },
      {
        label: '海南',
        value: 'CN_Hainan',
        children: [
          {
            label: '白沙',
            value: 'CN_Hainan_White Sands',
          },
          {
            label: '保亭',
            value: 'CN_Hainan_Baoting',
          },
          {
            label: '昌江',
            value: 'CN_Hainan_Changjiang',
          },
          {
            label: '澄迈',
            value: 'CN_Hainan_Chengmai',
          },
          {
            label: '定安',
            value: 'CN_Hainan_Honour',
          },
          {
            label: '东方',
            value: 'CN_Hainan_East',
          },
          {
            label: '儋州',
            value: 'CN_Hainan_Danzhou',
          },
          {
            label: '海口',
            value: 'CN_Hainan_Haikou',
          },
          {
            label: '乐东',
            value: 'CN_Hainan_Music East',
          },
          {
            label: '临高',
            value: 'CN_Hainan_Pro High',
          },
          {
            label: '陵水',
            value: 'CN_Hainan_Lingshui',
          },
          {
            label: '琼海',
            value: 'CN_Hainan_Qionghai',
          },
          {
            label: '琼中',
            value: 'CN_Hainan_Qiongzhong',
          },
          {
            label: '三沙',
            value: 'CN_Hainan_Sansha',
          },
          {
            label: '三亚',
            value: 'CN_Hainan_Sanya',
          },
          {
            label: '屯昌',
            value: 'CN_Hainan_Tunchang',
          },
          {
            label: '文昌',
            value: 'CN_Hainan_Wenchang',
          },
          {
            label: '万宁',
            value: 'CN_Hainan_Manning',
          },
          {
            label: '五指山',
            value: 'CN_Hainan_Fingers',
          },
        ],
      },
      {
        label: '河南',
        value: 'CN_Henan',
        children: [
          {
            label: '安阳',
            value: 'CN_Henan_Anyang',
          },
          {
            label: '鹤壁',
            value: 'CN_Henan_Hebi',
          },
          {
            label: '济源',
            value: 'CN_Henan_Jiyuan',
          },
          {
            label: '焦作',
            value: 'CN_Henan_Jiaozuo',
          },
          {
            label: '开封',
            value: 'CN_Henan_Kaifeng',
          },
          {
            label: '漯河',
            value: 'CN_Henan_Luohe',
          },
          {
            label: '洛阳',
            value: 'CN_Henan_Luoyang',
          },
          {
            label: '南阳',
            value: 'CN_Henan_Nanyang',
          },
          {
            label: '平顶山',
            value: 'CN_Henan_mesa',
          },
          {
            label: '濮阳',
            value: 'CN_Henan_Puyang',
          },
          {
            label: '三门峡',
            value: 'CN_Henan_Sanmenxia',
          },
          {
            label: '商丘',
            value: 'CN_Henan_Shangqiu',
          },
          {
            label: '许昌',
            value: 'CN_Henan_Xuchang',
          },
          {
            label: '新乡',
            value: 'CN_Henan_Xinxiang',
          },
          {
            label: '信阳',
            value: 'CN_Henan_Xinyang',
          },
          {
            label: '周口',
            value: 'CN_Henan_Zhoukou',
          },
          {
            label: '驻马店',
            value: 'CN_Henan_Zhumadian',
          },
          {
            label: '郑州',
            value: 'CN_Henan_Zhengzhou',
          },
        ],
      },
      {
        label: '湖南',
        value: 'CN_Hunan',
        children: [
          {
            label: '常德',
            value: 'CN_Hunan_Changde',
          },
          {
            label: '长沙',
            value: 'CN_Hunan_Changsha',
          },
          {
            label: '郴州',
            value: 'CN_Hunan_Chenzhou',
          },
          {
            label: '怀化',
            value: 'CN_Hunan_Huaihua',
          },
          {
            label: '衡阳',
            value: 'CN_Hunan_Hengyang',
          },
          {
            label: '娄底',
            value: 'CN_Hunan_Loudi',
          },
          {
            label: '邵阳',
            value: 'CN_Hunan_Shaoyang',
          },
          {
            label: '湘潭',
            value: 'CN_Hunan_Xiangtan',
          },
          {
            label: '湘西',
            value: 'CN_Hunan_Xiangxi',
          },
          {
            label: '益阳',
            value: 'CN_Hunan_Yiyang',
          },
          {
            label: '岳阳',
            value: 'CN_Hunan_Yueyang',
          },
          {
            label: '永州',
            value: 'CN_Hunan_Yongzhou',
          },
          {
            label: '张家界',
            value: 'CN_Hunan_Zhangjiajie',
          },
          {
            label: '株洲',
            value: 'CN_Hunan_Zhuzhou',
          },
        ],
      },
      {
        label: '吉林',
        value: 'CN_Jilin',
        children: [
          {
            label: '白城',
            value: 'CN_Jilin_White City',
          },
          {
            label: '白山',
            value: 'CN_Jilin_White Mountains',
          },
          {
            label: '长春',
            value: 'CN_Jilin_Changchun',
          },
          {
            label: '吉林',
            value: 'CN_Jilin_Jilin',
          },
          {
            label: '辽源',
            value: 'CN_Jilin_Liaoyuan',
          },
          {
            label: '四平',
            value: 'CN_Jilin_Siping',
          },
          {
            label: '松原',
            value: 'CN_Jilin_Matsubara',
          },
          {
            label: '通化',
            value: 'CN_Jilin_Tonghua',
          },
          {
            label: '延边',
            value: 'CN_Jilin_Yanbian',
          },
        ],
      },
      {
        label: '江苏',
        value: 'CN_Jiangsu',
        children: [
          {
            label: '常州',
            value: 'CN_Jiangsu_Changzhou',
          },
          {
            label: '淮安',
            value: 'CN_Jiangsu_Huai',
          },
          {
            label: '连云港',
            value: 'CN_Jiangsu_Lianyungang',
          },
          {
            label: '南京',
            value: 'CN_Jiangsu_Nanjing',
          },
          {
            label: '南通',
            value: 'CN_Jiangsu_Nantong',
          },
          {
            label: '宿迁',
            value: 'CN_Jiangsu_Suqian',
          },
          {
            label: '苏州',
            value: 'CN_Jiangsu_Suzhou',
          },
          {
            label: '泰州',
            value: 'CN_Jiangsu_Taizhou',
          },
          {
            label: '无锡',
            value: 'CN_Jiangsu_Wuxi',
          },
          {
            label: '徐州',
            value: 'CN_Jiangsu_Xuzhou',
          },
          {
            label: '盐城',
            value: 'CN_Jiangsu_Yancheng',
          },
          {
            label: '扬州',
            value: 'CN_Jiangsu_Yangzhou',
          },
          {
            label: '镇江',
            value: 'CN_Jiangsu_Zhenjiang',
          },
        ],
      },
      {
        label: '江西',
        value: 'CN_Jiangxi',
        children: [
          {
            label: '抚州',
            value: 'CN_Jiangxi_Fuzhou',
          },
          {
            label: '赣州',
            value: 'CN_Jiangxi_Ganzhou',
          },
          {
            label: '吉安',
            value: 'CN_Jiangxi_Jian',
          },
          {
            label: '景德镇',
            value: 'CN_Jiangxi_Jingdezhen',
          },
          {
            label: '九江',
            value: 'CN_Jiangxi_Jiujiang',
          },
          {
            label: '南昌',
            value: 'CN_Jiangxi_Nanchang',
          },
          {
            label: '萍乡',
            value: 'CN_Jiangxi_Pingxiang',
          },
          {
            label: '上饶',
            value: 'CN_Jiangxi_Shangrao',
          },
          {
            label: '新余',
            value: 'CN_Jiangxi_Xinyu',
          },
          {
            label: '宜春',
            value: 'CN_Jiangxi_Yichun',
          },
          {
            label: '鹰潭',
            value: 'CN_Jiangxi_Yingtan',
          },
        ],
      },
      {
        label: '辽宁',
        value: 'CN_Liaoning',
        children: [
          {
            label: '鞍山',
            value: 'CN_Liaoning_Anshan',
          },
          {
            label: '本溪',
            value: 'CN_Liaoning_Benxi',
          },
          {
            label: '朝阳',
            value: 'CN_Liaoning_Chaoyang',
          },
          {
            label: '丹东',
            value: 'CN_Liaoning_Dandong',
          },
          {
            label: '大连',
            value: 'CN_Liaoning_Dalian',
          },
          {
            label: '抚顺',
            value: 'CN_Liaoning_Fushun',
          },
          {
            label: '阜新',
            value: 'CN_Liaoning_Fuxin',
          },
          {
            label: '葫芦岛',
            value: 'CN_Liaoning_Huludao',
          },
          {
            label: '锦州',
            value: 'CN_Liaoning_Jinzhou',
          },
          {
            label: '辽阳',
            value: 'CN_Liaoning_Liaoyang',
          },
          {
            label: '盘锦',
            value: 'CN_Liaoning_Panjin',
          },
          {
            label: '沈阳',
            value: 'CN_Liaoning_Shenyang',
          },
          {
            label: '铁岭',
            value: 'CN_Liaoning_Tieling',
          },
          {
            label: '营口',
            value: 'CN_Liaoning_Yingkou',
          },
        ],
      },
      {
        label: '内蒙古',
        value: 'CN_Inner Mongolia',
        children: [
          {
            label: '阿拉善',
            value: 'CN_Inner Mongolia_Alxa',
          },
          {
            label: '包头',
            value: 'CN_Inner Mongolia_Baotou',
          },
          {
            label: '巴彦淖尔',
            value: 'CN_Inner Mongolia_Bayannur',
          },
          {
            label: '赤峰',
            value: 'CN_Inner Mongolia_Chifeng',
          },
          {
            label: '鄂尔多斯',
            value: 'CN_Inner Mongolia_Erdos',
          },
          {
            label: '呼和浩特',
            value: 'CN_Inner Mongolia_Hohhot',
          },
          {
            label: '呼伦贝尔',
            value: 'CN_Inner Mongolia_Hulunbeier',
          },
          {
            label: '通辽',
            value: 'CN_Inner Mongolia_Tongliao',
          },
          {
            label: '乌海',
            value: 'CN_Inner Mongolia_Wuhai',
          },
          {
            label: '乌兰察布',
            value: 'CN_Inner Mongolia_Bu',
          },
          {
            label: '兴安',
            value: 'CN_Inner Mongolia_Xing',
          },
          {
            label: '锡林郭勒',
            value: 'CN_Inner Mongolia_Gol',
          },
        ],
      },
      {
        label: '宁夏',
        value: 'CN_Ningxia',
        children: [
          {
            label: '固原',
            value: 'CN_Ningxia_Guyuan',
          },
          {
            label: '石嘴山',
            value: 'CN_Ningxia_Shizuishan',
          },
          {
            label: '吴忠',
            value: 'CN_Ningxia_Wuzhong',
          },
          {
            label: '银川',
            value: 'CN_Ningxia_Yinchuan',
          },
          {
            label: '中卫',
            value: 'CN_Ningxia_Zhongwei',
          },
        ],
      },
      {
        label: '青海',
        value: 'CN_Qinghai',
        children: [
          {
            label: '果洛',
            value: 'CN_Qinghai_Guoluo',
          },
          {
            label: '海北',
            value: 'CN_Qinghai_rambling',
          },
          {
            label: '海东',
            value: 'CN_Qinghai_Haidong',
          },
          {
            label: '海南',
            value: 'CN_Qinghai_Hainan',
          },
          {
            label: '黄南',
            value: 'CN_Qinghai_Huangnan',
          },
          {
            label: '海西',
            value: 'CN_Qinghai_Hercynian',
          },
          {
            label: '西宁',
            value: 'CN_Qinghai_Xining',
          },
          {
            label: '玉树',
            value: 'CN_Qinghai_Yushu',
          },
        ],
      },
      {
        label: '四川',
        value: 'CN_Sichuan',
        children: [
          {
            label: '阿坝',
            value: 'CN_Sichuan_Aba',
          },
          {
            label: '巴中',
            value: 'CN_Sichuan_Pakistan',
          },
          {
            label: '成都',
            value: 'CN_Sichuan_Chengdu',
          },
          {
            label: '德阳',
            value: 'CN_Sichuan_Deyang',
          },
          {
            label: '达州',
            value: 'CN_Sichuan_Florida',
          },
          {
            label: '广安',
            value: 'CN_Sichuan_Kwong',
          },
          {
            label: '广元',
            value: 'CN_Sichuan_Guangyuan',
          },
          {
            label: '甘孜',
            value: 'CN_Sichuan_Ganzi',
          },
          {
            label: '乐山',
            value: 'CN_Sichuan_Leshan',
          },
          {
            label: '凉山',
            value: 'CN_Sichuan_Liangshan',
          },
          {
            label: '泸州',
            value: 'CN_Sichuan_Luzhou',
          },
          {
            label: '眉山',
            value: 'CN_Sichuan_Meishan',
          },
          {
            label: '绵阳',
            value: 'CN_Sichuan_Mianyang',
          },
          {
            label: '南充',
            value: 'CN_Sichuan_Nanchong',
          },
          {
            label: '内江',
            value: 'CN_Sichuan_Neijiang',
          },
          {
            label: '攀枝花',
            value: 'CN_Sichuan_Panzhihua',
          },
          {
            label: '遂宁',
            value: 'CN_Sichuan_Suining',
          },
          {
            label: '雅安',
            value: 'CN_Sichuan_Yaan',
          },
          {
            label: '宜宾',
            value: 'CN_Sichuan_Yibin',
          },
          {
            label: '自贡',
            value: 'CN_Sichuan_Zigong',
          },
          {
            label: '资阳',
            value: 'CN_Sichuan_Ziyang',
          },
        ],
      },
      {
        label: '山东',
        value: 'CN_Shandong',
        children: [
          {
            label: '滨州',
            value: 'CN_Shandong_Binzhou',
          },
          {
            label: '东营',
            value: 'CN_Shandong_Dongying',
          },
          {
            label: '德州',
            value: 'CN_Shandong_Texas',
          },
          {
            label: '菏泽',
            value: 'CN_Shandong_Heze',
          },
          {
            label: '济南',
            value: 'CN_Shandong_Jinan',
          },
          {
            label: '济宁',
            value: 'CN_Shandong_Jining',
          },
          {
            label: '聊城',
            value: 'CN_Shandong_Liaocheng',
          },
          {
            label: '莱芜',
            value: 'CN_Shandong_Laiwu',
          },
          {
            label: '临沂',
            value: 'CN_Shandong_Linyi',
          },
          {
            label: '青岛',
            value: 'CN_Shandong_Qingdao',
          },
          {
            label: '日照',
            value: 'CN_Shandong_Rizhao',
          },
          {
            label: '泰安',
            value: 'CN_Shandong_Taian',
          },
          {
            label: '潍坊',
            value: 'CN_Shandong_Weifang',
          },
          {
            label: '威海',
            value: 'CN_Shandong_Weihai',
          },
          {
            label: '烟台',
            value: 'CN_Shandong_Yantai',
          },
          {
            label: '淄博',
            value: 'CN_Shandong_Zibo',
          },
          {
            label: '枣庄',
            value: 'CN_Shandong_Zaozhuang',
          },
        ],
      },
      {
        label: '上海',
        value: 'CN_Shanghai',
        children: [
          {
            label: '宝山',
            value: 'CN_Shanghai_Baoshan',
          },
          {
            label: '崇明',
            value: 'CN_Shanghai_Chongming',
          },
          {
            label: '长宁',
            value: 'CN_Shanghai_Changning',
          },
          {
            label: '奉贤',
            value: 'CN_Shanghai_Fengxian',
          },
          {
            label: '虹口',
            value: 'CN_Shanghai_Hongkou',
          },
          {
            label: '黄浦',
            value: 'CN_Shanghai_Huangpu',
          },
          {
            label: '静安',
            value: 'CN_Shanghai_Jing',
          },
          {
            label: '嘉定',
            value: 'CN_Shanghai_Jiading',
          },
          {
            label: '金山',
            value: 'CN_Shanghai_Jinshan',
          },
          {
            label: '卢湾',
            value: 'CN_Shanghai_Luwan',
          },
          {
            label: '闵行',
            value: 'CN_Shanghai_Minhang',
          },
          {
            label: '浦东新区',
            value: 'CN_Shanghai_Pudong New District',
          },
          {
            label: '普陀',
            value: 'CN_Shanghai_Po',
          },
          {
            label: '青浦',
            value: 'CN_Shanghai_Qingpu',
          },
          {
            label: '松江',
            value: 'CN_Shanghai_Songjiang',
          },
          {
            label: '徐汇',
            value: 'CN_Shanghai_Xuhui',
          },
          {
            label: '杨浦',
            value: 'CN_Shanghai_Yangpu',
          },
          {
            label: '闸北',
            value: 'CN_Shanghai_Zhabei',
          },
        ],
      },
      {
        label: '陕西',
        value: 'CN_Shaanxi',
        children: [
          {
            label: '安康',
            value: 'CN_Shaanxi_Ankang',
          },
          {
            label: '宝鸡',
            value: 'CN_Shaanxi_Baoji',
          },
          {
            label: '汉中',
            value: 'CN_Shaanxi_Hanzhong',
          },
          {
            label: '商洛',
            value: 'CN_Shaanxi_Shangluo',
          },
          {
            label: '铜川',
            value: 'CN_Shaanxi_Tongchuan',
          },
          {
            label: '渭南',
            value: 'CN_Shaanxi_Weinan',
          },
          {
            label: '西安',
            value: "CN_Shaanxi_Xi'an",
          },
          {
            label: '咸阳',
            value: 'CN_Shaanxi_Xianyang',
          },
          {
            label: '延安',
            value: 'CN_Shaanxi_Yanan',
          },
          {
            label: '榆林',
            value: 'CN_Shaanxi_Yulin',
          },
        ],
      },
      {
        label: '山西',
        value: 'CN_Shanxi',
        children: [
          {
            label: '长治',
            value: 'CN_Shanxi_Changzhi',
          },
          {
            label: '大同',
            value: 'CN_Shanxi_Datong',
          },
          {
            label: '晋城',
            value: 'CN_Shanxi_Jincheng',
          },
          {
            label: '晋中',
            value: 'CN_Shanxi_Jinzhong',
          },
          {
            label: '临汾',
            value: 'CN_Shanxi_Linfen',
          },
          {
            label: '吕梁',
            value: 'CN_Shanxi_Luliang',
          },
          {
            label: '朔州',
            value: 'CN_Shanxi_Shuozhou',
          },
          {
            label: '太原',
            value: 'CN_Shanxi_Taiyuan',
          },
          {
            label: '忻州',
            value: 'CN_Shanxi_Xinzhou',
          },
          {
            label: '运城',
            value: 'CN_Shanxi_Yuncheng',
          },
          {
            label: '阳泉',
            value: 'CN_Shanxi_Yangquan',
          },
        ],
      },
      {
        label: '天津',
        value: 'CN_Tianjin',
        children: [
          {
            label: '北辰',
            value: 'CN_Tianjin_North Star',
          },
          {
            label: '宝坻',
            value: 'CN_Tianjin_Baodi',
          },
          {
            label: '滨海新区',
            value: 'CN_Tianjin_Binhai New Area',
          },
          {
            label: '东丽',
            value: 'CN_Tianjin_Toray',
          },
          {
            label: '河北',
            value: 'CN_Tianjin_Hebei',
          },
          {
            label: '河东',
            value: 'CN_Tianjin_east',
          },
          {
            label: '和平',
            value: 'CN_Tianjin_Peace',
          },
          {
            label: '红桥',
            value: 'CN_Tianjin_Red Bridge',
          },
          {
            label: '河西',
            value: 'CN_Tianjin_west',
          },
          {
            label: '静海',
            value: 'CN_Tianjin_Jinghai',
          },
          {
            label: '津南',
            value: 'CN_Tianjin_Jinnan',
          },
          {
            label: '蓟县',
            value: 'CN_Tianjin_Jixian',
          },
          {
            label: '宁河',
            value: 'CN_Tianjin_Ninghe',
          },
          {
            label: '南开',
            value: 'CN_Tianjin_Nankai',
          },
          {
            label: '武清',
            value: 'CN_Tianjin_Wuqing',
          },
          {
            label: '西青',
            value: 'CN_Tianjin_West Green',
          },
        ],
      },
      {
        label: '台湾',
        value: 'CN_Taiwan',
        children: [
          {
            label: '高雄市',
            value: 'CN_Taiwan_Kaohsiung City',
          },
          {
            label: '花莲县',
            value: 'CN_Taiwan_Hualien County',
          },
          {
            label: '基隆市',
            value: 'CN_Taiwan_Keelung City',
          },
          {
            label: '金门县',
            value: 'CN_Taiwan_Kinmen County',
          },
          {
            label: '嘉义市',
            value: 'CN_Taiwan_Chiayi City',
          },
          {
            label: '嘉义县',
            value: 'CN_Taiwan_Chiayi County',
          },
          {
            label: '连江县',
            value: 'CN_Taiwan_Lianjiang County',
          },
          {
            label: '苗栗县',
            value: 'CN_Taiwan_Miaoli County',
          },
          {
            label: '南投县',
            value: 'CN_Taiwan_Nantou County',
          },
          {
            label: '屏东县',
            value: 'CN_Taiwan_Pingtung County',
          },
          {
            label: '澎湖县',
            value: 'CN_Taiwan_Penghu County',
          },
          {
            label: '台北市',
            value: 'CN_Taiwan_Taipei',
          },
          {
            label: '台东县',
            value: 'CN_Taiwan_Taitung County',
          },
          {
            label: '台南市',
            value: 'CN_Taiwan_Tainan City',
          },
          {
            label: '桃园县',
            value: 'CN_Taiwan_Taoyuan County',
          },
          {
            label: '台中市',
            value: 'CN_Taiwan_Taichung City',
          },
          {
            label: '新北市',
            value: 'CN_Taiwan_New Taipei City',
          },
          {
            label: '新竹市',
            value: 'CN_Taiwan_Hsinchu City',
          },
          {
            label: '新竹县',
            value: 'CN_Taiwan_Hsinchu County',
          },
          {
            label: '云林县',
            value: 'CN_Taiwan_Yunlin County',
          },
          {
            label: '宜兰县',
            value: 'CN_Taiwan_Yilan County',
          },
          {
            label: '彰化县',
            value: 'CN_Taiwan_Changhua County',
          },
        ],
      },
      {
        label: '西藏',
        value: 'CN_Tibet',
        children: [
          {
            label: '阿里',
            value: 'CN_Tibet_Ali',
          },
          {
            label: '昌都',
            value: 'CN_Tibet_Qamdo',
          },
          {
            label: '拉萨',
            value: 'CN_Tibet_Lhasa',
          },
          {
            label: '林芝',
            value: 'CN_Tibet_Nyingchi',
          },
          {
            label: '那曲',
            value: 'CN_Tibet_Nagqu',
          },
          {
            label: '日喀则',
            value: 'CN_Tibet_Shigatse',
          },
          {
            label: '山南',
            value: 'CN_Tibet_Shannan',
          },
        ],
      },
      {
        label: '香港',
        value: 'CN_Hong Kong',
        children: [
          {
            label: '北区',
            value: 'CN_Hong Kong_North',
          },
          {
            label: '大埔区',
            value: 'CN_Hong Kong_Tai Po',
          },
          {
            label: '东区',
            value: 'CN_Hong Kong_Eastern',
          },
          {
            label: '观塘区',
            value: 'CN_Hong Kong_Kwun Tong',
          },
          {
            label: '黄大仙区',
            value: 'CN_Hong Kong_Wong Tai Sin',
          },
          {
            label: '九龙城区',
            value: 'CN_Hong Kong_Kowloon City',
          },
          {
            label: '葵青区',
            value: 'CN_Hong Kong_Kwai Tsing',
          },
          {
            label: '离岛区',
            value: 'CN_Hong Kong_Islands',
          },
          {
            label: '南区',
            value: 'CN_Hong Kong_Southern',
          },
          {
            label: '荃湾区',
            value: 'CN_Hong Kong_Tsuen Wan',
          },
          {
            label: '深水埗区',
            value: 'CN_Hong Kong_Sham Shui Po',
          },
          {
            label: '沙田区',
            value: 'CN_Hong Kong_Sha Tin',
          },
          {
            label: '屯门区',
            value: 'CN_Hong Kong_Tuen Mun',
          },
          {
            label: '湾仔区',
            value: 'CN_Hong Kong_Wan Chai',
          },
          {
            label: '西贡区',
            value: 'CN_Hong Kong_Sai Kung',
          },
          {
            label: '油尖旺区',
            value: 'CN_Hong Kong_Yau Tsim Mong',
          },
          {
            label: '元朗区',
            value: 'CN_Hong Kong_Yuen Long',
          },
          {
            label: '中西区',
            value: 'CN_Hong Kong_Central and Western',
          },
        ],
      },
      {
        label: '新疆',
        value: 'CN_Xinjiang',
        children: [
          {
            label: '阿克苏',
            value: 'CN_Xinjiang_Aksu',
          },
          {
            label: '阿拉尔',
            value: 'CN_Xinjiang_Arar',
          },
          {
            label: '阿勒泰',
            value: 'CN_Xinjiang_Altay',
          },
          {
            label: '博尔塔拉',
            value: 'CN_Xinjiang_Bortala',
          },
          {
            label: '巴音郭楞',
            value: 'CN_Xinjiang_Bayingolin',
          },
          {
            label: '昌吉',
            value: 'CN_Xinjiang_Changji',
          },
          {
            label: '哈密',
            value: 'CN_Xinjiang_Hamilton',
          },
          {
            label: '和田',
            value: 'CN_Xinjiang_Hotan',
          },
          {
            label: '克拉玛依',
            value: 'CN_Xinjiang_Karamay',
          },
          {
            label: '喀什',
            value: 'CN_Xinjiang_Kashgar',
          },
          {
            label: '克孜勒苏',
            value: 'CN_Xinjiang_Kizilsu',
          },
          {
            label: '石河子',
            value: 'CN_Xinjiang_Shihezi',
          },
          {
            label: '塔城',
            value: 'CN_Xinjiang_Tacheng',
          },
          {
            label: '吐鲁番',
            value: 'CN_Xinjiang_Turpan',
          },
          {
            label: '图木舒克',
            value: 'CN_Xinjiang_Figure wooden Shook',
          },
          {
            label: '五家渠',
            value: 'CN_Xinjiang_Wujiaqu',
          },
          {
            label: '乌鲁木齐',
            value: 'CN_Xinjiang_Urumqi',
          },
          {
            label: '伊犁',
            value: 'CN_Xinjiang_Ili',
          },
        ],
      },
      {
        label: '云南',
        value: 'CN_Yunnan',
        children: [
          {
            label: '保山',
            value: 'CN_Yunnan_Baoshan',
          },
          {
            label: '楚雄',
            value: 'CN_Yunnan_Chuxiong',
          },
          {
            label: '德宏',
            value: 'CN_Yunnan_Devon',
          },
          {
            label: '大理',
            value: 'CN_Yunnan_Dali',
          },
          {
            label: '迪庆',
            value: 'CN_Yunnan_Diqing',
          },
          {
            label: '红河',
            value: 'CN_Yunnan_Red',
          },
          {
            label: '昆明',
            value: 'CN_Yunnan_Kunming',
          },
          {
            label: '临沧',
            value: 'CN_Yunnan_Lincang',
          },
          {
            label: '丽江',
            value: 'CN_Yunnan_Lijiang',
          },
          {
            label: '怒江',
            value: 'CN_Yunnan_Nu',
          },
          {
            label: '普洱',
            value: "CN_Yunnan_Pu'er",
          },
          {
            label: '曲靖',
            value: 'CN_Yunnan_Qujing',
          },
          {
            label: '文山',
            value: 'CN_Yunnan_Wenshan',
          },
          {
            label: '西双版纳',
            value: 'CN_Yunnan_Xishuangbanna',
          },
          {
            label: '玉溪',
            value: 'CN_Yunnan_Yuxi',
          },
          {
            label: '昭通',
            value: 'CN_Yunnan_Zhaotong',
          },
        ],
      },
      {
        label: '浙江',
        value: 'CN_Zhejiang',
        children: [
          {
            label: '杭州',
            value: 'CN_Zhejiang_Hangzhou',
          },
          {
            label: '湖州',
            value: 'CN_Zhejiang_Huzhou',
          },
          {
            label: '金华',
            value: 'CN_Zhejiang_Jinhua',
          },
          {
            label: '嘉兴',
            value: 'CN_Zhejiang_Jiaxing',
          },
          {
            label: '丽水',
            value: 'CN_Zhejiang_Lishui',
          },
          {
            label: '宁波',
            value: 'CN_Zhejiang_Ningbo',
          },
          {
            label: '衢州',
            value: 'CN_Zhejiang_Quzhou',
          },
          {
            label: '绍兴',
            value: 'CN_Zhejiang_Shaoxing',
          },
          {
            label: '台州',
            value: 'CN_Zhejiang_Taizhou',
          },
          {
            label: '温州',
            value: 'CN_Zhejiang_Wenzhou',
          },
          {
            label: '舟山',
            value: 'CN_Zhejiang_Zhoushan',
          },
        ],
      },
    ],
  },
  {
    label: '澳门（中国）',
    value: 'MO',
    children: [
      {
        label: '大堂区',
        value: 'MO_Cathedral',
      },
      {
        label: '氹仔',
        value: 'MO_Taipa',
      },
      {
        label: '风顺堂区',
        value: 'MO_St. Lawrence',
      },
      {
        label: '花地玛堂区',
        value: 'MO_Fatima',
      },
      {
        label: '路环岛',
        value: 'MO_Coloane',
      },
      {
        label: '圣安多尼堂区',
        value: 'MO_St. Anthony',
      },
      {
        label: '望德堂区',
        value: 'MO_St. Lazarus',
      },
    ],
  },
  {
    label: '台湾（中国）',
    value: 'TW',
    children: [
      {
        label: '高雄市',
        value: 'TW_Kaohsiung City',
      },
      {
        label: '花莲县',
        value: 'TW_Hualien County',
      },
      {
        label: '基隆市',
        value: 'TW_Keelung City',
      },
      {
        label: '金门县',
        value: 'TW_Kinmen County',
      },
      {
        label: '嘉义市',
        value: 'TW_Chiayi City',
      },
      {
        label: '嘉义县',
        value: 'TW_Chiayi County',
      },
      {
        label: '连江县',
        value: 'TW_Lianjiang County',
      },
      {
        label: '苗栗县',
        value: 'TW_Miaoli County',
      },
      {
        label: '南投县',
        value: 'TW_Nantou County',
      },
      {
        label: '屏东县',
        value: 'TW_Pingtung County',
      },
      {
        label: '澎湖县',
        value: 'TW_Penghu County',
      },
      {
        label: '台北市',
        value: 'TW_Taipei',
      },
      {
        label: '台东县',
        value: 'TW_Taitung County',
      },
      {
        label: '台南市',
        value: 'TW_Tainan City',
      },
      {
        label: '桃园县',
        value: 'TW_Taoyuan County',
      },
      {
        label: '台中市',
        value: 'TW_Taichung City',
      },
      {
        label: '新北市',
        value: 'TW_New Taipei City',
      },
      {
        label: '新竹市',
        value: 'TW_Hsinchu City',
      },
      {
        label: '新竹县',
        value: 'TW_Hsinchu County',
      },
      {
        label: '宜兰县',
        value: 'TW_Yilan County',
      },
      {
        label: '云林县',
        value: 'TW_Yunlin County',
      },
      {
        label: '彰化县',
        value: 'TW_Changhua County',
      },
    ],
  },
  {
    label: '香港（中国）',
    value: 'HK',
    children: [
      {
        label: '北区',
        value: 'HK_North',
      },
      {
        label: '大埔区',
        value: 'HK_Tai Po',
      },
      {
        label: '东区',
        value: 'HK_Eastern',
      },
      {
        label: '观塘区',
        value: 'HK_Kwun Tong',
      },
      {
        label: '黄大仙区',
        value: 'HK_Wong Tai Sin',
      },
      {
        label: '九龙城区',
        value: 'HK_Kowloon City',
      },
      {
        label: '葵青区',
        value: 'HK_Kwai Tsing',
      },
      {
        label: '离岛区',
        value: 'HK_Islands',
      },
      {
        label: '南区',
        value: 'HK_Southern',
      },
      {
        label: '荃湾区',
        value: 'HK_Tsuen Wan',
      },
      {
        label: '深水埗区',
        value: 'HK_Sham Shui Po',
      },
      {
        label: '沙田区',
        value: 'HK_Sha Tin',
      },
      {
        label: '屯门区',
        value: 'HK_Tuen Mun',
      },
      {
        label: '湾仔区',
        value: 'HK_Wan Chai',
      },
      {
        label: '西贡区',
        value: 'HK_Sai Kung',
      },
      {
        label: '油尖旺区',
        value: 'HK_Yau Tsim Mong',
      },
      {
        label: '元朗区',
        value: 'HK_Yuen Long',
      },
      {
        label: '中西区',
        value: 'HK_Central and Western',
      },
    ],
  },
  {
    label: '其他',
    value: 'other',
  },
];

/**
 * tree 数据转换
 * @param {Array} tree 待转换的 tree
 * @param {Object} map 键值对映射
 * @return {Array} 转换后的 tree
 */
const convertTree = (tree, map) => {
  const result = [];

  // 遍历 tree
  tree.forEach((item) => {
    // 读取 map 的键值映射
    const title = item[map.title];
    let children = item[map.children];

    // 对应iview Tree Props
    let obj = {
      expand: false,
      disabled: false,
      disableCheckbox: false,
      selected: false,
      checked: false,
    };
    // 如果有子节点，递归
    if (children) {
      children = convertTree(children, map);
    }

    result.push({
      ...item,
      ...obj,
      title,
      children,
    });
  });

  return result;
};

const mapConvertTree = {
  title: 'label',
  children: 'children',
};

const DISTRICT_DATA_TREE = convertTree(DISTRICT_DATA, mapConvertTree);

/**
 * 地址对象
 * { 'CN_Zhejiang_Hangzhou': '浙江 杭州' }
 */
const DISTRICT_OBJ = {};
function getDistrictObj(list) {
  list.forEach((item) => {
    const valArr = item.value.split('_');
    const len = valArr.length;
    let label;
    if (len === 1) {
      label = item.label;
    } else if (len === 2) {
      label = `${DISTRICT_OBJ[valArr[0]]} ${item.label}`;
    } else if (len === 3) {
      const provinceVal = `${valArr[0]}_${valArr[1]}`;
      label = `${DISTRICT_OBJ[provinceVal].replace('中国 ', '')} ${item.label}`;
    }

    DISTRICT_OBJ[item.value] = label;
    if (item.children) {
      getDistrictObj(item.children);
    }
  });
}

getDistrictObj(DISTRICT_DATA);

export { DISTRICT_DATA_TREE, DISTRICT_OBJ };
