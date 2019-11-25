# node-utils


## Current Benchmarks (11/25/19)

```
MacBook Pro (15-inch, 2018) v10.15 (19A603)
2.6 GHz 6-Core Intel Core i7
32 GB 2400 MHz DDR4
```

┌────────────────────────┬────────────────────────────┬───────────────────────────────┐
│ Name                   │ Node-Utils                 │ Old                           │
├────────────────────────┼────────────────────────────┼───────────────────────────────┤
│ Get-Lodash             │ 4389345 ops/s | +537.27%   │ 816977 ops/s | x5.37 slower   │
├────────────────────────┼────────────────────────────┼───────────────────────────────┤
│ Set-Lodash             │ 3139727 ops/s | +694.64%   │ 451993 ops/s | x6.95 slower   │
├────────────────────────┼────────────────────────────┼───────────────────────────────┤
│ Mapkeys-Lodash         │ 4216764 ops/s | +718.01%   │ 587286 ops/s | x7.18 slower   │
├────────────────────────┼────────────────────────────┼───────────────────────────────┤
│ Mapkeys-AltMap         │ 4222581 ops/s | +260.44%   │ 1621352 ops/s | x2.60 slower  │
├────────────────────────┼────────────────────────────┼───────────────────────────────┤
│ Clone-Lodash           │ 205583699 ops/s | +702.68% │ 29256998 ops/s | x7.03 slower │
├────────────────────────┼────────────────────────────┼───────────────────────────────┤
│ CloneDeep-Lodash       │ 1936850 ops/s | +274.74%   │ 704975 ops/s | x2.75 slower   │
├────────────────────────┼────────────────────────────┼───────────────────────────────┤
│ Request-RequestPromise │ 7752 ops/s | +1459.89%     │ 531 ops/s | x14.60 slower     │
└────────────────────────┴────────────────────────────┴───────────────────────────────┘
