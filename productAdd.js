
let arr=JSON.parse(localStorage.getItem("Product"))||[]

function sub(e){
    e.preventDefault();
    let form=document.querySelector("form");
    let names=form.name.value
    let category=form.category.value
    let Image=form.image.value
    let price=form.price.value
    let gender=form.gender.value
    let sold=form.sold.value

    let p = new mahendra(names,category,Image,price,gender,sold)
    arr.push(p)
    localStorage.setItem("Product",JSON.stringify(arr))


}

function mahendra(n,c,i,p,g,s){
    this.names=n
    this.category=c
    this.image=i
    this.price=p
    this.gender=g
    this.sold=s
}



