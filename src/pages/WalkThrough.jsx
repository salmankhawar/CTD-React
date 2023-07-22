import Nav from '../components/Nav'

export default function WalkThrough() {
  return (
    <>
      <Nav />
      <div className="text-center p-3 text-info bg-primary-subtle border border-primary-subtle rounded-3">
        <h1>Walkthrough</h1>
      </div>
      <div className='text-center text-warning m-3'>
        <h2>Introduction</h2>
      </div>
      <div className='text-center text-dark p-2 m-4'>
        <p>
          Welcome to the Fruit Shop Web App.
          It's a simple app which displays products with their image, title, price, inventory & unit of measure.
          It also allows user to update the inventory and see the live inventory change. 
          Additionally you can create new products from the same app. 
        </p>
      </div>
      <div className='container justify-content-center'>
        <div className='text-center text-warning m-3'>
          <h2>User Journey</h2>
        </div>
        <div className='text-start text-dark p-2 m-4' >
          <p>
            User is greeted with a Home Screen with 3 Buttons:<br></br>
            1. Home: Redirects you to the home page, main grid of products wherever on the website the user is.<br></br>
            2. Create Product: Takes the user to the listing page where the product creation form is. <br></br>
            3. Walkthrough: The page where the user is reading all this. <br></br>
            <br></br>
            Then there is the the Filter Bar with 3 options: <br></br>
            1. Search Bar: As soon as the user starts typing, the products will start filtering the ones that have the same keyword in the title. <br></br>
            2. Sort By: The user gets two options, Price & Name. When the user changes it, the products will sort according to the selection.<br></br>
            3. Sort Order: The user gets two options, Ascending & Descending. When the user changes it, the products will sort according to the selection.<br></br>
            It will display the filtered products sorted according to how the user selects.
            <br></br>
            <br></br>
            Next the user sees the product grid where each product is displayed as a separate card, each card has the following sections: <br></br>
            1. Product Image: The visual of the product itself.<br></br>
            2. Product Title: The Name of the Product.<br></br>
            3. Product Description: The detailed description what the product actually is.<br></br>
            4. Quantity: The quantity available in stock mentioned in it's respectable Unit of Measure<br></br>
            5. Price: The price of the product, if the product was entered with the currency GBP the price is converted with live rate to USD and displaying the adjusted price in USD and mentioning the unit of measure.<br></br>
            6. Update Quantity: Where there's a field to enter the desired quantity, after entering the desired quantity on pressing the 'Update' button, the inventory count of the product will update and reflect on the product card and display the message saying 'Quantity Updated'. Here if the same quantity is entered then there will be an error message saying 'Quantity Already Exists'. If the user changes quantity to Zero, it will send an email to the address setup in the API mentioning the item which has gone out of stock.<br></br>
          </p>
            Moving on to the Create Product, upon clicking the create product button a form is displayed to the user with the following fields:<br></br>
            1. Title: The product title or name 
            2. Description: The details of the product to be listed
            3. Photo: Link to the photo of the product, if the user puts in anything but the URL then it will display the error saying 'Please Enter a Valid URL'.<br></br>
            4. Quantity: The initial stock count of the product.<br></br>
            5. Unit of Measure: A drop down selection between Kg & Dozen.<br></br> 
            6. Currency: A radio button to select the desired currency, to select between USD & GBP.<br></br>
            7. Price: The desired price of the product, allows upto 2 decimal places. <br></br>
            All fields are mandatory, on clicking the 'Submit' button, if everything is correct then it will display the message saying: 'Product Successfully Created'.<br></br>

            The user can now navigate back to the home page by clicking the 'Home' button on the top of the screen. 
          
        </div>
      </div>
      <div className='text-center text-danger m-3'>
        <h2>Thank You!</h2>
      </div>
    </>
  )
}