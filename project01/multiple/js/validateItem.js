function (request) {
    if (request.path.indexOf('/api/v1/product/10') === 0) {
        return { statusCode: 500 };
    }
    return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
            "order_id": 8004359122,
            "total_price": 14.95
        }
      };
}