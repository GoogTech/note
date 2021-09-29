# 链路层

### 概念

- 帧

	- 链路层的协议单元，封装网络层数据报

- 任务

	- 将网络层传来的IP数据报组装成帧

- 链路

	- 网络两个结点之间的物理通道

- 数据链路

	- 网络中两节点之间的逻辑通道

### 功能

- 为网络提供服务

	- 无确认的无连接服务

		- 适用于实时通信或误码率较低的通信信道，如以太网

	- 有确认的无连接服务

		- 适用于误码率较高的通信信道，如无线通信

	- 有确认的面向连接服务

		- 适用于可靠性、实时性要求较高的场合

- 链路管理

	- 数据链路层连接的建立、维持和释放的过程（主要用于面向连接的服务）

- 流量控制

	- 限制发送发的数据流量，避免因帧丢失而出错

- 组帧

	- 将网络层的分组封装成帧（加头加尾），进而提高传输效率

- 差错控制

	- 使发送方确定接收方是否正确收到由其发送的数据

### 透明传输

不管所传数据是什么样的比特组合，都应当能在链路上传送

- 字符计数法

	- 使用一个计数字段来标明帧内字符数（计数段自身占一个字节）

- 字符填充发

	- SOH表示帧的首部开始、EOT表结尾、ESC用于转义以避免误判

- 比特填充法

	- 用 01111110 表示一帧的开始和结束
	- 为避免误判，连续 5 个 1 时自动在其后插入一个 0

- 违规编码法

	- 例如曼切斯特编码方法

### 差错控制

- 错误

	- 帧错

		- 丢失、重复、失序

	- 位错

		- 比特位出错，如 1 和 0 互换了位置

- 差错由噪音引起

	- 随机噪音

		- 由线路本身电气特性所产生的随机噪音（热噪声），是信道固有、随机存在的
		- 解决办法：提高信噪比来减少或避免干扰

	- 冲击噪音

		- 外界特定的短暂原因所造成的冲击噪声（产生差错的主要原因）
		- 解决办法：利用编码技术

- 分类

	- 检错编码

		- 奇偶校验码

			- 奇数校验 —n—> 1 的个数为奇数
			- 偶数校验 —n—> 1 的个数为偶数
			- 只能检测奇数位的出错情况（检错能力为50%），且无法定位错误位置

		- 循环冗余码（CRC）

			- 1. 加 0
			- 2. 模除2

	- 纠错编码

		- 海明码

			- ﻿（信息位﻿，校验位﻿）
			- 不仅可以发现错位，还能定位出错位的位置
			- 纠错 ﻿ 位，需要的码距为 ﻿，检错 ﻿ 位则需要的码距位为 ﻿
			- 步骤

				- 1. 确定海明码位数
				- 2. 确定校验码分布
				- 3. 校验码取值

### 流量控制

- 链路层流量控制为点对点，传输层流量控制则为端到端
- 停止等待协议

	- 单帧滑动窗口与停止-等待协议

		- 发送及接收窗口大小均都为 1
		- 若计时器满时仍未收到确认，则再次发送相同帧
		- 优点为简单，缺点为信道利用率很低

- 滑动窗口协议

	- 多帧滑动窗口与后退N帧协议（GBN）

		- 接收窗口为 1，发送窗口的尺寸满足 ﻿
		- 接收方只按顺序接收帧，无序则丢弃
		- 累计确认，确认序列最大的、按序到达的帧
		- 弊端为重传时的数据帧包含已传送正确的数据帧

	- 多帧滑动窗口与选择重传协议（SR）

		- 接收与发送窗口尺寸都大于1，最大值为 ﻿
		- 对数据逐一确认，确认一个接收一个
		- 只需重传出错帧（接收端有缓存）

- 信道利用率、吞吐量

	- ﻿
	- ﻿

### 介质访问控制

- 采取一定的措施，使得两对结点之间的通信不会发生互相干扰的情况
- 多路复用技术

	- 把多个信号组合在一条物理信道上进行传输，进而共享信道资源，提高利用率

- 静态划分信道

	- 信道划分介质访问控制

		- 频分多路复用 FDM
		- 时分多路复用 TDM

			- 同步时分多路复用
			- 异步时分多路复用

		- 波分多路复用 WDM
		- 码分多路复用 CDM

- 动态划分信道

	- 轮循访问介质访问控制

		- 令牌传递协议（无冲突）

	- 随机访问介质访问控制

		- ALOHA 协议

			- 纯ALOHA协议
			- 时隙ALOHA协议

		- CSMA 协议

			- 1-坚持CSMA
			- 非坚持CSMA
			- p-坚持CSMA

		- CSMA/CD 协议

			- 对碰撞的检测
			- 适用于有线网络
			- 可检测冲突，但无法避免
			- 通过电压变化来检测
			- ﻿

		- CSMA/CA 协议

			- 对碰撞的避免
			- 适用于无线网络
			- 无法检测是有无冲突，尽量避免
			- 通过能量、载波、能量载波混合检测来检测

### 局域网

- 工作在 OSI 参考模型的物理层和链路层，使用的协议主要在链路层
- IEEE 802 为局域网制定的标准相当于 OSI 参考模型的数据链路层和物理层
- 特点

	- 较高的数据传输速率，较低的时延和误码率
	- 各站点关系平等，可进行广播和组播

- 分类

	- 有线局域网
	- 无线局域网

	  IEEE 802.11

		- 有固定基础设施无线局域网（Wi-Fi）
		- 无固定基础设施移动自组织网络

- 拓扑实现

	- 以太网

		- 逻辑拓扑为总线形结构，物理拓扑为星形或扩展星形结构

	- 令牌网

		- 逻辑拓扑是环形结构，物理拓扑为星形结构

	- FDDI

		- 逻辑拓扑是环形结构，物理拓扑是双环结构

- 传输介质

	- 双绞线（主流）、铜缆、光纤（根据介质不同可以分为有线和无线）
	- 介质访问控制方法

		- CSMA/CD、令牌总线、令牌环

- 以太网

	- 通信方式

		- 无连接、不可靠服务，即尽最大努力交付，差错的纠正由高层完成

	- 传输介质

		- 粗缆、细缆、双绞线、光纤

	- MAC地址

	  又称为**物理地址**或**硬件地址**

		- 全球唯一性
		- 由连字符分隔的12个十六进制数表示
		- 高24为厂商代码、低24为自动分配的网卡序列号

	- 高速以太网

		- 100BASE-T 以太网

			- 100Mb/s、双绞线、支持全双工及半双工

		- 吉比特以太网

			- 1Gb/s、光纤或双绞线、支持全双工及半双工

		- 10 吉比特以太网

			- 10Gb/s、光纤、仅支持全双工

### 广域网

- 由结点交换机及连接这些交换机的链路组成
- 工作在 OSI 参考模型的下三层，使用的协议主要在网络层
- 控制协议

	- PPP协议

		- 链路控制协议（LCP）
		- 网络控制协议（NCP）
		- 一个将数据报封装到串行链路（同步/异步串行）的方法

	- HDLC协议

		- 站类型

			- 主站、从站、复合站

		- 操作方式

			- 正常响应、异步平衡、异步相应方式

	- 区别

		- 相同点

			- 支持差错检测，但不纠正差错
			- 支持全双工链路、支持透明传输

		- 不同点

			- PPP面向字节，HDLC由 OSI 制定且面向比特
			- PPP为不可靠传输、HDLC为可靠传输
			- PPP帧比HDLC帧多一个 2 字节的协议字段
			- PPP用字节填充法来填充数据，HDLC用零比特填充法实现透明传输

- 与局域网的区别与联系示例图

	- 

### 链路层设备

- 扩展以太网

	- 物理层

		- 光纤、主干集线器

	- 链路层

		- 网桥、交换机

- 连接设备

	- 物理层

		- 中继器、集线器

	- 链路层

		- 网桥、局域网交换机

- 网桥

	- 碰撞域是指共享同一信道的各个站点可能发生冲突的范围，又称冲突域
	- 工作在链路层的 MAC 子层，可以使以太网各网段成为隔离开的碰撞域
	- 透明网桥

		- 通过自主学习算法建立转发表（非最佳路由）

	- 源路由网桥

		- 通过发现帧选择出一个最佳路由

- 交换机

  即多接口网桥

	- 是一个多端口的网桥，可以隔离冲突域及广播域（网络层的概念）
	- 通信时独占传输媒体带宽，故 ﻿ 个端口的交换机的总容量为 ﻿
	- 直通式交换机

		- 延迟小，安全性低、不支持不同速率端口间的交换

	- 存储转发式交换机

		- 延迟大、可靠性高、支持不同速率端口间的交换

- 冲突域和广播域

	- ﻿

		- ﻿

			- ﻿

	- 集线器

		- 

			- 不能

				- 

					- 不能

	- 中继器

		- 

			- 不能

				- 

					- 不能

	- 交换机

		- 

			-  能

				- 

					- 不能

	- 网桥

		- 

			-    能

				- 

					-   不能

	- 路由器

		- 

			-  能

				- 

					-  能