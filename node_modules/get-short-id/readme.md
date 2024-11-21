`npm i get-short-id`

It is useful to have prefixes for IDs to identify what kind of object this ID represents. Like user IDs start with `u-`
, invoices with `in-` and so on.

```javascript
const getId = require('get-short-id');

// getId('prefix', 'custom-character-set')

for(let i = 0; i < 10; i++) {
  console.log(getId());
}
```

Output:

```
_7tv0xaLVg_CsNdNWR9z
jjSDMZ58rqb_9UPxijh1
oC5PfQ2_nDQj3Aectn3q
1484pLNOb5DnIxWT0NRG9
1eZ285FiPkEgXYM8ulsLo
1dAV8M9YBIOxo35eFcKEa
uL7hHYD3zbz5RAfP0smJ
PqWqv56s_x1ybVehEDdG
jwpwYqytAfOi_N2kgSSs
4OClQeWNekJrXt4baDUl
```

## Prefix (optional)

In many systems it's beneficial to have prefixes for IDs. These prefixes may identify related object type. For example user objects may have prefix `u-`, invoice id would have
prefix `in-` and so on. For this reason first property of this helper function is prefix for the id. It may be skipped.

```javascript
const getId = require('get-short-id');

for(let i = 0; i < 10; i++) {
  console.log(getId('u-'));
}
```

Output:

```
u-dAG1nGLpe8AGEn0xArLT
u-1aSVQle7_fw4CeAJRQUCN
u-11GSwmFJ3ukYIJWsfjBTB
u-XFeBV_uK5mWVEeuu8zWq
u-11MyXMxw7lticGvHYguog
u-OhnJodpxYknbpDP8STPu
u-1jceAJ8rp2KrfaaPFCbkZ
u-16oKG1ldlXPNvt5gMJAOv
u-O7gBtZuoJ8y1Gfcj8ULN
u-k3D_VPocpD1Ag4kVAbjL
```

## Characters set (optional)

Default set of characters used to encode random id is this:

`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_`

Yet you can provide your own as needed. You must provide at least 2 characters.

```javascript
for(let i = 0; i < 10; i++) {
  console.log(getId('', 'ąčęėįšųūžĄČĘĖĮŠŲŪŽ'));
}
```

Output:

```
žŠčĮąČĘŪŽĘŲŪūūžĄŠŪšĖęČĄėŠėŽąš
žĖŽčąĖČŠųūčžųčįčŽŠūčšŠĘČėįųįĄ
ĄąŲČĮŠčęŽĖŽęęįČūčųėėĘĄĄŲšąąŲų
įĄŪšŲŲūŪČŲĖąŽįĘėŲžČžšŪŠžęūŲŪž
ėūėčŠūįĘėĘųĮĄųŠĮĮžĖČĄąįžŪĘęųĄ
ęįŪūĘėŪČūŠčĘėŠĄųŽėėŽŽčŽęžžČąŠ
čęĖūžįŠąŪūėūūūĄšŲĖūįččĮĮŲėūČų
šųŠĖŪĘĄėĘąĘĘūŠąęŲęččŲŪąŠŠĖąšū
ūųšįĖųęžčŠęįįŠŪęŠĘĮėąĖĘąĮžČŲĮ
šČŠųžŲįŽŲįūęĖŽĘšŪŽĖŠĖšĘŪšĘąšė
```

## More Examples of long & short IDs

If you will provide more characters then used inside UUID v4 - your IDs will be shorter. If you will provide less characters - your IDs will be longer.

```javascript
for(let i = 0; i < 10; i++) {
  console.log(getId('', '01'));
}
```

Output:

```
1111000010010110000001001110101011001001111101011101111000011101111000000010001111010010110011010000010011000010001001
1010101010000010101000110010000001101100001110000001100101000001100101001010011001111011100011011011110100001000011001
100011000110110101111000001100011010010101110110111111110000111111110000111101101000000100001101110000001111001111011000
101100001111100100010010001110010101100100001010110011011010110011011110100101010010010011001110011011000010010000000
110100101110001100101001111000011001010011001100111000000100111000000010110000011011011011010100111100010111010011100
10011010011011100001011100001010001101001101100001110001100001110001000011001101110001001000000010000001101010000111
11110000000110001101011101001001010100000101011111100110011111100110100010011110100000011101110111101011010010111011
11111100101111111001111100110101111000110110101111110100101111110100100011000110010110110100000111110110101101000101
110101111011001110110001000011001010000010010101011001100100011001100100011101111000011010110011110100010101111100011111
1110101100100100101100111011011101110111001110111011010111111011010111111000001110101011101111100011111101001110110111
```

```javascript
for(let i = 0; i < 10; i++) {
  console.log(getId('', '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%‰^&*()_+=-[{]};:\'"\\|,<.>/?ąčęėįšųūžĄČĘĖĮŠŲŪŽ'));
}
```

Output:

```
73Čhmč3'-į?5->tę#*
6J<o^Ę/I;!r;9kj;Lh
5čR8i81_wh@čę,@kYŲ
wLjNP9XC6B,SHzt.EF
7)x(mėXj@MBYbėzXjs
tŪ?Ė2Įq0[9,Ų#T1CĄz
Ec/išętG+O7Pp(loč
i2'Į&36HbvŲHnhm1ZD
rs}WZ?z/#=ŠĄvĄ$.QG
yo[abXqsz3i-=$[*Žž
```


## Fun Math game

- Generate 1000 IDs per second
- Continue doing so for 2 billion years

Congrats! You have 1% probability to witness a collision

(we take 23 characters from nanoid)
https://zelark.github.io/nano-id-cc/
