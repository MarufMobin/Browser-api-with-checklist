// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। 

const setTime = () =>{
    setTimeout(  () => {console.log("hellow WOrld")},3500)
}



// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

const showResult = () =>{
        
    const input = prompt("Give Me a Number Please");
    const parseInput = parseFloat(input)+200;
    alert(`${parseInput}`)

}


// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও

const canYouSure = () =>{
    const confirmMess = confirm('Can You See This Site URL')
    
    if( confirmMess ){
        alert('http://127.0.0.1:5500/task.html');
    }else{
        alert('Please Press Another Button')
    }
};
