const fixedChecklist = [
    {
        category: '证件',
        icon: '📁',
        color: 'bg-red-100',
        items: ['护照', '身份证', '入境申报单', 'Visa信用卡', '现金', '西瓜卡（iPhone钱包）']
    },
    {
        category: '电子设备',
        icon: '🔌',
        color: 'bg-yellow-100',
        items: ['手机', '电话卡+取卡器', '充电器+数据线', '充电宝', '耳机', '单反相机+镜头', '三脚架', '荧光棒']
    },
    {
        category: '衣物',
        icon: '👕',
        color: 'bg-blue-100',
        items: ['羽绒服', '卫衣', '厚裤子', '保暖内衣', '内裤', '袜子', '雪地靴', '拖鞋', '手套', '帽子', '颈枕', '围巾']
    },
    {
        category: '个护用品',
        icon: '🧴',
        color: 'bg-green-100',
        items: ['护肤品（洗面奶、水乳、身体乳）', '浴巾', '纸巾', '剃须刀', '清洁器', '遮纹身贴', '礼物']
    }
];

const travelApps = [
    { name: '谷歌地图', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rYQ29Vn3xorZxp5ewk7av3JmD3ent5QYHg&s' },
    { name: '有道翻译', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPEwYbeGF3Xtdg0BKaTR3ztDftSSGuEpVvQ&s' },
    { name: 'Klook', icon: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/57a0cd0e0000ff000593068f/0x0.png' },
    { name: 'Uber', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkml1_fREN83DDorwtIUe71lq8LjPEJNrhXA&s' },
    { name: 'Disney', icon: 'https://play-lh.googleusercontent.com/L6S4Kmuybtqak4hYxiZGl-wp2HhCaBUAc50tT5kDJqcc2GPXGayDQccIB-5kGj_5wg' },
    { name: 'DeepSeek', icon: 'https://custom.typingmind.com/assets/models/deepseek.png' },
];

function TravelChecklist() {
    return (
        <div className="mt-12 md:mt-20 max-w-2xl mx-auto p-4 min-h-screen bg-gray-50">
            {/* Header */}
            <h1 className="text-3xl font-bold text-black-600 mb-8 flex items-center gap-2">
                ✈️ 旅行必备清单
            </h1>

            {/* Main body */}
            <div className="grid gap-4 md:grid-cols-2">
                {fixedChecklist.map((category) => (
                    <div
                        key={category.category}
                        className={`p-4 rounded-xl ${category.color} shadow-sm`}
                    >
                        {/* Category Heading */}
                        <div className="flex items-center mb-4">
                            <span className="text-2xl mr-2">{category.icon}</span>
                            <h2 className="text-xl font-semibold">{category.category}</h2>
                        </div>

                        {/* Item list */}
                        <ul className="space-y-2">
                            {category.items.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center p-2 bg-white rounded-lg shadow-sm"
                                >
                                    <span className="flex-1 text-gray-700">{item}</span>
                                    {['护照', '手机', '身份证', '入境申报单', '现金', '充电宝', '单反相机+镜头', '内裤', '手套', '帽子', '剃须刀', '清洁器', '浴巾'].includes(item) && (
                                        <span >⭐</span>
                                    )}
                                    {item === '礼物' && (
                                        <span>㊙️</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* APP */}
            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    📱 必备APP
                </h2>

                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                    {travelApps.map((app, index) => (
                        <div
                            key={index}
                            className={`${app.color} p-4 rounded-xl 
                flex flex-col items-center justify-center
                aspect-square transition hover:shadow-md`}
                        >
                            <img
                                src={app.icon}
                                alt={app.name}
                                className="w-10 h-10 mb-2"
                            />
                            <p className="text-xs font-medium text-center">{app.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <p className="text-center text-gray-500 mt-8 text-sm">
                清单已包含 {fixedChecklist.reduce((sum, c) => sum + c.items.length, 0)} 项基本物品
            </p>
        </div >
    );
}

export default TravelChecklist;