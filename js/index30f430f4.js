// 基础链&合约配置
const CHAIN_ID = 56;
const RPC_URL = "https://bsc-dataseed.binance.org/";

const TOKEN_CONTRACT = "0xf273201c6CD5Eb07Da7F5D6bBbaA0b732bec1C";
const VEST_CONTRACT = "0xCAD806301b29771bB287838f2DD58402ec95fF85";
const STAKING_CONTRACT = "0x44D529c76Ad013DcC9F22D73636dDf75b9f3866C";

const TOKEN_NAME = "AIToken";
const TOKEN_SYMBOL = "AIT";
const TOKEN_DECIMALS = 18;
const TOTAL_SUPPLY = "100000000";

const SOCIAL = {
    twitter: "https://x.com/Jackieheyu",
    telegram: "https://t.me/xxxWJUuvApfpjYz11",
    discord: ""
};

// 代币ABI（你上传的完整ERC20 ABI）
const tokenABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"TOTAL_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// 质押池ABI（你上传的完整Staking ABI）
const stakingABI = [{"inputs":[{"internalType":"address","name":"_stakingToken","type":"address"},{"internalType":"address","name":"initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"addRewardFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyWithdrawReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardRate","type":"uint256"}],"name":"setRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"stakedAmount","type":"uint256"},{"internalType":"uint256","name":"userRewardPerTokenPaid","type":"uint256"},{"internalType":"uint256","name":"pendingReward","type":"uint256"}],"stateMutability":"view","type":"function"}];

// 全局合约实例
let provider, signer, tokenContract, stakingContract, userAddress;

// 连接钱包核心函数
    async function connectWallet() {
    if (!window.ethereum || !window.ethereum.isMetaMask) {
        alert("未检测到MetaMask，请先安装并解锁插件");
        return;
    }
    try {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x38" }]
        });
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        userAddress = await signer.getAddress();
        tokenContract = new ethers.Contract(TOKEN_CONTRACT, tokenABI, signer);
        stakingContract = new ethers.Contract(STAKING_CONTRACT, stakingABI, signer);
        alert("连接成功："+userAddress);
        refreshUserData();
    } catch (e) {
        alert("连接失败："+e.message);
    }
}

// 质押代币
async function stakeToken() {
    if (!userAddress) {
        alert("请先连接钱包");
        return;
    }
    const inputDom = document.getElementById("stakeInput");
    const amountStr = inputDom.value.trim();
    if (!amountStr || Number(amountStr) <= 0) {
        alert("请输入合法质押数量");
        return;
    }
    try {
        const amountWei = ethers.utils.parseUnits(amountStr, TOKEN_DECIMALS);
        // 授权代币给质押合约
        const approveTx = await tokenContract.approve(STAKING_CONTRACT, amountWei);
        await approveTx.wait();
        // 执行质押
        const stakeTx = await stakingContract.stake(amountWei);
        await stakeTx.wait();
        alert(`质押成功！交易哈希：${stakeTx.hash}`);
        inputDom.value = "";
        refreshUserData();
    } catch (err) {
        alert("质押失败：" + err.message);
    }
}

// 解押代币
async function unstakeToken() {
    if (!userAddress) {
        alert("请先连接钱包");
        return;
    }
    const inputDom = document.getElementById("stakeInput");
    const amountStr = inputDom.value.trim();
    if (!amountStr || Number(amountStr) <= 0) {
        alert("请输入合法解押数量");
        return;
    }
    try {
        const amountWei = ethers.utils.parseUnits(amountStr, TOKEN_DECIMALS);
        const tx = await stakingContract.unstake(amountWei);
        await tx.wait();
        alert(`解押成功！交易哈希：${tx.hash}`);
        inputDom.value = "";
        refreshUserData();
    } catch (err) {
        alert("解押失败：" + err.message);
    }
}

// 领取奖励
async function claimReward() {
    if (!userAddress) {
        alert("请先连接钱包");
        return;
    }
    try {
        const tx = await stakingContract.claimReward();
        await tx.wait();
        alert(`奖励领取成功！交易哈希：${tx.hash}`);
        refreshUserData();
    } catch (err) {
        alert("领取失败：" + err.message);
    }
}

// 刷新用户数据：余额、已质押、待领奖励
async function refreshUserData() {
    if (!userAddress) return;
    try {
        // 读取钱包代币余额
        const balWei = await tokenContract.balanceOf(userAddress);
        const balStr = ethers.utils.formatUnits(balWei, TOKEN_DECIMALS);
        document.getElementById("walletBalance").innerText = balStr;

        // 读取用户质押&奖励信息
        const userInfo = await stakingContract.userInfo(userAddress);
        const stakedWei = userInfo.stakedAmount;
        const pendingWei = userInfo.pendingReward;

        const stakedStr = ethers.utils.formatUnits(stakedWei, TOKEN_DECIMALS);
        const rewardStr = ethers.utils.formatUnits(pendingWei, TOKEN_DECIMALS);

        document.getElementById("stakedAmount").innerText = stakedStr;
        document.getElementById("pendingReward").innerText = rewardStr;
    } catch (e) {
        console.log("刷新数据失败", e);
    }
}