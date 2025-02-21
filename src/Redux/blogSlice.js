import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    { 
      id: 1, 
      title: "Second divided from form fish beast made every of seas all gathered us saying he our", 
      content: `MCSE boot camps have its supporters and its detractors. 
      Some people do not understand why you should have to spend money on 
      boot camp when you can get the MCSE study materials yourself at a fraction 
      of the camp price. However, who has the willpower

MCSE boot camps have its supporters and its detractors. 
Some people do not understand why you should have to spend
 money on boot camp when you can get the MCSE study materials 
 yourself at a fraction of the camp price. However, who has the willpower to 
 actually sit through a self-imposed MCSE training. who has the willpower to actually`, 
      image: "https://preview.colorlib.com/theme/tailor/assets/img/blog/single_blog_1.png" 
    },
    { 
      id: 2, 
      title: "State Management", 
      content: `MCSE boot camps have its supporters and its detractors. 
      Some people do not understand why you should have to spend money on 
      boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. 
      However, who has the willpower

      MCSE boot camps have its supporters and its detractors. Some people do not understand 
      why you should have to spend money on boot camp when you can get the MCSE study materials 
      yourself at a fraction of the camp price. However, who has the willpower to actually sit 
      through a self-imposed MCSE training. who has the willpower to actually`, 
      image: "https://preview.colorlib.com/theme/tailor/assets/img/blog/single_blog_2.png.webp" 
    },
    { 
      id: 3, 
      title: "State Management", 
      content: `MCSE boot camps have its supporters and its detractors. 
      Some people do not understand why you should have to spend money on 
      boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. 
      However, who has the willpower

      MCSE boot camps have its supporters and its detractors. Some people do not understand 
      why you should have to spend money on boot camp when you can get the MCSE study materials 
      yourself at a fraction of the camp price. However, who has the willpower to actually sit 
      through a self-imposed MCSE training. who has the willpower to actually`, 
      image: "https://preview.colorlib.com/theme/tailor/assets/img/blog/single_blog_3.png" 
    },
    { 
      id: 4, 
      title: "State Management", 
      content: `MCSE boot camps have its supporters and its detractors. 
      Some people do not understand why you should have to spend money on 
      boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. 
      However, who has the willpower

      MCSE boot camps have its supporters and its detractors. Some people do not understand 
      why you should have to spend money on boot camp when you can get the MCSE study materials 
      yourself at a fraction of the camp price. However, who has the willpower to actually sit 
      through a self-imposed MCSE training. who has the willpower to actually`, 
      image: "https://preview.colorlib.com/theme/tailor/assets/img/blog/single_blog_4.png" 
    },
    { 
      id: 5, 
      title: "State Management", 
      content: `MCSE boot camps have its supporters and its detractors. 
      Some people do not understand why you should have to spend money on 
      boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. 
      However, who has the willpower

      MCSE boot camps have its supporters and its detractors. Some people do not understand 
      why you should have to spend money on boot camp when you can get the MCSE study materials 
      yourself at a fraction of the camp price. However, who has the willpower to actually sit 
      through a self-imposed MCSE training. who has the willpower to actually`, 
      image: "https://preview.colorlib.com/theme/tailor/assets/img/blog/single_blog_5.png" 
    }
  ],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push({ id: Date.now(), ...action.payload });
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    }
  }
});

export const { addPost, deletePost } = blogSlice.actions;
export default blogSlice.reducer;
