# Blue Tees Series 3 Max Battery Cap
# Outer face (31 x 25 mm, 2 mm thick)

rect(width=31, height=25)
arc(top=true, radius=25)
extrude(height=2)

# Insert plug (30.6 x 24.6 mm, 1.8 mm deep)

rect(width=30.6, height=24.6)
extrude(height=-1.8)

# Relief notches for 1 mm tabs on flat side
# Two cutouts, each 3.5 mm wide x 1.1 mm deep

cutout(width=3.5, height=1.1, x=-13, y=-12)
cutout(width=3.5, height=1.1, x=13, y=-12)