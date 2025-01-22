import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>

        <Grid item xs={6}>
          <div className='flex cursor-pointer'>
            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://imagescdn.peterengland.com/img/app/product/3/39622712-12759405.jpg?auto=format&w=390" alt="" />
            {/* width, height - 5 rem,  covering object */}

            <div className='ml-5 space-y-2'> {/* // margin left 5 & also given space in y axis */}
              <p className=''>Men Slim Mid Rise Black Jeans</p>  {/* margin bottom 2 */}
              <p className='opacity-50 text-xs font-semibold'>Size: M</p> {/* give opacity - 50, text extra small & font - semibold */}
              <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>

        {/* xs={4}: This defines the width of the grid item. The grid is divided into 12 columns by default. xs is a breakpoint for small screen sizes (extra small devices). By setting xs={4}, it means that this item will take up 4 out of the 12 available columns. */}
        <Grid item xs={4}>
          {true && <div>
            <p>
              <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
              {/* mr: margin right tm: text small */}
              <span>
                Delivered on March 01
              </span>

            </p>
            <p className='text-xs'>
              Your Item has been Delivered
            </p>
          </div>



          }
          {false && <p>
            <span>
              Expected Delivery on March 01
            </span>
          </p>}
        </Grid>

      </Grid>
    </div>
  )
}
