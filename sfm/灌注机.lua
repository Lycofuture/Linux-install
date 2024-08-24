name "insolator"  -- 定义机器的名称

every 1 ticks do  -- 每1个刻（tick）执行以下操作
    input forge_energy:: from cube top side  -- 从顶部立方体输入锻造能量
    output forge_energy:: to insolator  -- 将能量输出到机器
end

every 20 ticks do  -- 每20个刻（tick）执行以下操作
    input fluid:: from sink  -- 从水槽输入液体
    output fluid:: to each insolator  -- 将液体输出到每台机器

    input *phyto* from fertilizerchest  -- 从肥料箱输入“*phyto*”资源
    output to each insolator  -- 将其输出到每台机器

    if insolator has <1 *seeds* then  -- 如果机器中少于1个“*seeds*”
        input *seeds* from mainChest  -- 从主箱子输入“*seeds*”
        output 1 to each insolator  -- 每台机器输出1个“*seeds*”
    end

    input from insolator slots 2-5  -- 从机器的第2到第5槽位输入物品
    output *seeds* to mainChest  -- 将“*seeds*”输出到主箱子
    output to chest  -- 将其余物品输出到chest
end
