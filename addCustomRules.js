const customProxyGroups = [
  {
    name: "💡 Claude",
    type: "select",
    proxies: [
      "🇬🇧 CN2-V229-英国-1x-NF&BBC*",
      "🇳🇱 CN2-V238-荷兰-1x-NF*",
      "🇬🇧 IPLC-V331-英国-1x-NF&BBC&Tiktok*",
      "🇵🇭 IPLC-V336-菲律宾-1x-马尼拉-NF&HBO*"
    ]
  },
  {
    name: "💡 AI相关应用",
    type: "select",
    proxies: [
      "🚀 手动切换",
      "🇯🇵 IPLC-V315-日本-1x-NF&Abema*（ChatGPT动态解锁测试）",
      "🇯🇵 IPLC-V365-日本-1x-NF&Abema*（ChatGPT动态解锁测试）",
      "🇯🇵 IPLC-V366-日本-1x-NF&Abema*（ChatGPT动态解锁测试）",
      "🇺🇸 IPLC-V350-美国-1x-NF&HBO&Disney*",
      "🇺🇸 IPLC-V351-美国-2x-夏威夷-NF&HBO",
      "🇺🇸 IPLC-V355-美国-4x-家宽-NF&HBO&Disney*",
      "🇺🇸 IPLC-V371-美国-1x-NF&HBO&Disney*",
      "🇺🇸 IPLC-V372-美国-1x-NF&HBO&Disney*"
    ]
  },
  {
    name: "🎮 Heaven Burns Red",
    type: "select",
    proxies: [
      "🇭🇰 IPLC-V205-香港-1x-HKBN-NF&Disney*",
      "🇭🇰 IPLC-V208-香港-1x-HKT-NF&Disney*",
      "🇭🇰 IPLC-V305-香港-1x-NF&Disney*",
      "🇭🇰 IPLC-V306-香港-1x-NF&Disney*",
      "🇭🇰 IPLC-V309-香港-1x-NF&Disney*",
      "🇭🇰 CN2-V321-香港-0.6x-NF",
      "🇭🇰 CN2-V322-香港-0.6x-NF",
      "🇭🇰 CN2-V325-香港-0.6x-NF",
      "🇭🇰 CN2-V326-香港-1x-HKBN-NF&Disney*",
      "🇭🇰 CN2-V327-香港-1x-HKBN-NF&Disney*",
      "🇭🇰 CN2-V346-香港-0.6x-HGC-NF*"
    ]
  }
];

const customRules = [
  "DOMAIN-SUFFIX,claude.ai,💡 Claude",
  "DOMAIN-SUFFIX,perplexity.ai,💡 AI相关应用",
  "DOMAIN-SUFFIX,bing.com,💡 AI相关应用",
  "PROCESS-NAME,HeavenBurnsRed.exe,🎮 Heaven Burns Red",
  "DOMAIN-SUFFIX,bgm.tv,🚀 手动切换",
  "DOMAIN-SUFFIX,bangumi.tv,🚀 手动切换",
  "DOMAIN-SUFFIX,dmhy.org,🚀 手动切换",
  "DOMAIN-SUFFIX,tsdm39.com,🚀 手动切换",
  "DOMAIN-SUFFIX,nexusmods.com,🚀 手动切换",
  "DOMAIN-SUFFIX,linkedin.com,🚀 手动切换",
  "DOMAIN-SUFFIX,moegirl.org.cn,DIRECT",
  "GEOIP,steam@cn,DIRECT",
  "DOMAIN-SUFFIX,steamserver.net,DIRECT",
  "DOMAIN-SUFFIX,steamcontent.com,DIRECT",
  "PROCESS-NAME,PikPak.exe,DIRECT",
  "PROCESS-NAME,Lyricify.exe,DIRECT"
];

function modifyConfiguration(configuration) {
  // 添加自定义代理组
  if (!configuration['proxy-groups']) {
    configuration['proxy-groups'] = [];
  }
  configuration['proxy-groups'] = configuration['proxy-groups'].concat(customProxyGroups);

  // 添加自定义规则
  if (!configuration['rules']) {
    configuration['rules'] = [];
  }
  configuration['rules'] = customRules.concat(configuration['rules']);

  return configuration;
}

// Stash 脚本处理函数
function main(config) {
  const modifiedConfig = modifyConfiguration(JSON.parse(config));
  return JSON.stringify(modifiedConfig);
}