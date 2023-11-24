// console.log("hello World" );

const app = Vue.createApp({
    //data, functions
    // template : '<h2> I am the template </h2>'
    data(){
        return {
            url: "netninja.co.uk",
            showBooks : false,
            title: "The Final Empire",
            author: "dirqa",
            age: 23,
            x: 0,
            y: 0,
            books:
            [
                {title: 'name of the wind', author: 'pattrick rothfuss', img: 'assets/1.jpg', isFav : true},
                {title: 'the way of kinga', author: 'brandon', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire ', author:'brandsadda', img:'assets/3.jpg', isFav: true}
            ]
        }
    },
    methods:{
        changeTitle(judul){
            this.title = judul;
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data){
            // console.log('event') --- kalo gapakai parameter e
            console.log(e, e.type)
            if (data){
               console.log(data); 
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav;
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav )
        }
    }
})
app.mount('#app')