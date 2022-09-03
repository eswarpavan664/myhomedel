import React from 'react'

function Recomendations() {
  return (
    <>
        <section>
      <div className='container mt-5'>
        <h2 className='mb-5 font-weight-light'>Popular localities in and around <strong>Hyderabad</strong></h2>
        <div className='row'>

          <div className='col-md-4 mb-4'>
            <div class="card location_cards">
              <div class="card-body">
                <h5>Picturesque Cafes</h5>
                <h5>17 places</h5>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <div class="card location_cards">
              <div class="card-body">
                <h5>Picturesque Cafes</h5>
                <h5>17 places</h5>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <div class="card location_cards">
              <div class="card-body">
                <h5>Picturesque Cafes</h5>
                <h5>17 places</h5>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <div class="card location_cards">
              <div class="card-body">
                <h5>Picturesque Cafes</h5>
                <h5>17 places</h5>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <div class="card location_cards">
              <div class="card-body">
                <h5>Picturesque Cafes</h5>
                <h5>17 places</h5>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <div class="card location_cards">
              <div class="card-body">
                <h5>Picturesque Cafes</h5>
                <h5>17 places</h5>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <div class="card location_cards">
              <div class="card-body text-center">
                <h5>See More</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section>
      <div className='container mt-5'>
        <h1 className='font-weight-light'>Explore options near me</h1>
        <div className='row'>

          <div className='col-12 mb-3'>
            <div className='card'>
              <details>
                <summary>Click to open</summary>
                <p>If your browser supports this element, it should allow you to expand and collapse these details.</p>
              </details>
            </div>
          </div>

          <div className='col-12 mb-3'>
            <div className='card'>
              <details>
                <summary>Click to open</summary>
                <p>If your browser supports this element, it should allow you to expand and collapse these details.</p>
              </details>
            </div>
          </div>


        </div>
      </div>

    </section>
    </>
  )
}

export default Recomendations;