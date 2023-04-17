## Run with single file
```
$mb start --configfile imposters.json
```
Port :: 8000

## Run with multiple file
```
$mb start --configfile multiple-imposters.json
```

Port :: 8000, 8001

## Cycle response
```
$mb start --configfile cycle-response.json
```

## Demo with register flow
* Register success (201)
* Register again with existing user (400)
```
$mb start --configfile demo-register-flow.json
```