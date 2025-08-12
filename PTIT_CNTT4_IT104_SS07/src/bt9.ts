class _Comment {
    static commentCount: number = 1
    id: number
    userId: number
    content: string
    replies: _Comment[]

    constructor(userId: number, content: string) {
        this.id = _Comment.commentCount++
        this.userId = userId
        this.content = content
        this.replies = []
    }

    addReply(reply: _Comment) {
        this.replies.push(reply)
    }
}

class Post {
    static postCount: number = 1
    id: number
    userId: number
    content: string
    likes: number[]
    comments: _Comment[]

    constructor(userId: number, content: string) {
        this.id = Post.postCount++
        this.userId = userId
        this.content = content
        this.likes = []
        this.comments = []
    }

    addLike(userId: number) {
        if (this.likes.indexOf(userId) === -1) {
        this.likes.push(userId)
        }
    }

    addComment(comment: _Comment) {
        this.comments.push(comment)
    }
}

class User {
    static userCount: number = 1
    id: number
    posts: Post[]
    following: User[]

    constructor() {
        this.id = User.userCount++
        this.posts = []
        this.following = []
    }

    createPost(content: string): Post {
        let newPost = new Post(this.id, content)
        this.posts.push(newPost)
        return newPost
    }

    comment(post: Post, content: string): _Comment {
        let newComment = new _Comment(this.id, content)
        post.addComment(newComment)
        return newComment
    }

    follow(user: User) {
        if (this.following.indexOf(user) === -1) {
        this.following.push(user)
        }
    }

    likePost(post: Post) {
        post.addLike(this.id)
    }

    viewFeed(): Post[] {
        let feedPosts: Post[] = []
        this.following.forEach(followedUser => {
            feedPosts = feedPosts.concat(followedUser.posts)
        })
        return feedPosts
    }
}

let userA = new User()
let userB = new User()
let userC = new User()

userA.follow(userB)
userA.follow(userC)

let postA = userB.createPost("Hom nay troi dep")
let postB = userC.createPost("Hoc TypeScript vui qua")

userA.likePost(postA)
userA.comment(postA, "Dung vay")
userA.comment(postB, "Tuyet voi")

console.log("Bang tin cua nguoi A:", userA.viewFeed())
