# Products Server/ Clothify API

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li>
          <a href="#built-with">Built With</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
          <a href="#prerequisites">Prerequisites</a>
        </li>
        <li>
          <a href="#installation">Installation</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#endpoints">Endpoints</a>
    </li>
    <li>
      <a href="#database-schema">Database Schema</a>
    </li>
    <li>
      <a href="#system-architecture">System Architecture</a>
    </li>
  </ol>
</details>

# About
<a id='about'></a>
RESTful API for our products detail page application, which you can find <a href='https://github.com/Revenge-of-the-SithQL/atelier' target='_blank'>here</a>.

### Built With
<a id='build-with'></a>

![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS EC2](https://img.shields.io/badge/aws-ec2-orange.svg?style=for-the-badge&logo=aws-ec2&logoColor=white)

### 🌟 Project Overview:
The Products Service API is designed to enhance the backend capabilities of an existing monolithic architecture, addressing system requirements such as achieving 1000 requests per second (RPS), a 2000ms latency threshold, and maintaining an error rate of less than 1%. To assess and optimize performance, tools such as LoaderIO, NewRelic, and K6 were employed.

The optimization strategies encompass four primary methods:

1. Caching: Implementing caching mechanisms for faster content delivery.
2. Load Balancing and Horizontal Scaling: Distributing resources efficiently through load balancing and horizontal scaling.
3. Server Configuration: Fine-tuning server configurations to optimize performance.
4. Redundancy for Failovers: Establishing redundancy measures to ensure failover capabilities in case of system disruptions.

### 📈 Performance Results:

#### Target Performance:
- [ ] Throughput: 1000 RPS
- [ ] Latency: 2000 ms
- [ ] Error Rate: <1% rate

#### Actual Performance:
- [ ] Throughput: > 5000 RPS
- [ ] Latency: 62 ms
- [ ] Error Rate: 0% rate

# Getting Started

<a id='getting-started'></a>
Instructions to setup the API on your local machine below.

### Prerequisites
<a id='prerequisites'></a>

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

```sh
npm install npm@latest -g
```
### Required Environment Variables
```sh
PORT=(host port)
DB_HOST=(database host)
DB_USERNAME=(database username)
DB_PASSWORD=(database password)
DB_NAME=(database name)
```

### Installation
<a id='installation'></a>

1. Clone the repo
   ```sh
   git clone https://github.com/SDC-Enceladus/Products.git
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
1. Enter your ENV varaibles into a `.env` file
   ```
   See above for required variables or
   copy example.env and fill in
   ```
1. Start the Products Server
   ```sh
   npm run start
   ```

# Endpoints
<a id='endpoints'></a>
<details>
  <summary>/products [GET]</summary>
  <p></p>
  <div>Request:<div>

    query uses pagination or defaults to 5 count and 1 page

  <p></p>
  <div>Response:</div>

    [{id, name, slogan, description, category, default_price}]  response will be an array of product objects of size equal to pagination or default

</details>

<details>
  <summary>/products/:id [GET]</summary>
  <p></p>
  <div>Request:<div>

    query must contain a valid product id

  <p></p>
  <div>Response:</div>

    {id, name, slogan, description, category, default_price, features: [{feature, value}]} response will be a products object with features as an array of objects {feature, value}

</details>

<details>
  <summary>/products/:id/styles [GET]</summary>
  <p></p>
  <div>Request:<div>

    query must contain a valid product id

  <p></p>
  <div>Response:</div>

    {product_id, results: [{style_id, name, original_price, sale_price, default?, photos: [{thumbnail_url, url}], skus: {sku_id: {quantity, size}}}] response will be an object with results as an array of style objects 

</details>

<details>
  <summary>/products/:id/related [GET]</summary>
  <p></p>
  <div>Request:<div>

    query must contain a valid product id

  <p></p>
  <div>Response:</div>

    [product_id] response will be an array of related product_ids

</details>

<details>
  <summary>/${process.env.LOADER} [GET]</summary>
  <p></p>
  <div>Request:<div>

    .env file must have a valid LOADER IO Key

  <p></p>
  <div>Response:</div>

    LOADER_IO_KEY  response will be a string of the Loader IO key to demonstrate access to the service

</details>

