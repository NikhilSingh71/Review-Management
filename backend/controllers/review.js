const reviewdal=new Object()

import Review from "../models/reviews.js"

reviewdal.addReview=async(req)=>{
    try {
        const {title,content}=req?.body
        if(!title || !content){
            return {
                status:false,
                message:'All fields required'
            }
        }
        let review=new Review({
            title,
            content
        })
        let savedReview=await review.save()
        return {
            status:true,
            data:savedReview,
            message:'review added successfully'
        }
    } catch (error) {
        return { status: false, message: error.message ? error.message : error };
    }
}


reviewdal.getReview=async(req)=>{
    try {
      const allReviews=await Review.find({isDeleted:false})
      if(allReviews.length===0) return {status:true,message:'no reviews'}
      return {status:true,data:allReviews,message:'all reviews fetched'}
    } catch (error) {
        return { status: false, message: error.message ? error.message : error };
    }
}


reviewdal.updateReview = async (req) => {
    try {
        const { title, content } = req.body;
        const reviewId = req.params.id; // Access 'id' directly from params object
        if (!title || !content) {
            return {
                status: false,
                message: 'All fields required'
            };
        }
        // Use await to ensure that the update operation is completed before proceeding
        const updatedReview = await Review.findByIdAndUpdate(
          reviewId,
          {
            title,
            content,
          },
          { new: true }
        ); // Use { new: true } to return the updated document

        if (!updatedReview) {
            return {
                status: false,
                message: 'Review not found'
            };
        }

        return {
            status: true,
            data: updatedReview,
            message:'updated successfully'
        };
    } catch (error) {
        return {
            status: false,
            message: error.message ? error.message : error
        };
    }
};

reviewdal.deleteReview=async(req)=>{
    try {
        let review_Id=req.params['id']
        let parameter=req.query.parameter
        if(parameter==='undo'){
            let review=await Review.findById(review_Id)
            review.isDeleted=false
            let deletedReview=await review.save()
            return {
                status:true,
                data:deletedReview,
                message:'undo completed'
            }
        }
        const reviewExists=await Review.findById(review_Id)
        if(!reviewExists){
            return { status: false, message: 'review does not exist' };
        }
        reviewExists.isDeleted=true
        let deletedReview=await reviewExists.save()
        return {
            status:true,
            data:deletedReview,
            message:'deleted successfully'
        }
       
    } catch (error) {
        return { status: false, message: error.message ? error.message : error };
    }
}



export default reviewdal
