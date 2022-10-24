<?php

abstract class RealEstate {
    private string $address;
    private float $price;
    private float $surface;

    public function __construct(string $address, float $price, float $surface)
    {
        $this->address = $address;
        $this->price = $price;
        $this->surface = $surface;
    }

    public function getAddress(): string
    {
        return $this->address;
    }

    public function getPrice(): float
    {
        return $this->price;
    }

    public function setPrice(float $price): void
    {
        $this->price = $price;
    }

    public function getSurface(): float
    {
        return $this->surface;
    }

    public function setSurface(float $surface): void
    {
        $this->surface = $surface;
    }
}

final class House extends RealEstate
{
    private int $levelCount;

    public function __construct(string $address, float $price, float $surface, int $levelCount)
    {
        parent::__construct($address, $price, $surface);
        $this->setLevelCount($levelCount);
    }

    public function getLevelCount(): int
    {
        return $this->levelCount;
    }

    public function setLevelCount(int $levelCount): void
    {
        if ($levelCount > 0) {
            $this->levelCount = $levelCount;
        } else {
            $this->levelCount = 1;
        }
    }
}

final class Flat extends RealEstate
{
    private int $floor;

    public function __construct(string $address, float $price, float $surface, int $floor)
    {
        parent::__construct($address, $price, $surface);
        $this->floor = $floor;
    }

    public function getFloor(): int
    {
        return $this->floor;
    }

    public function setFloor(int $floor): void
    {
        $this->floor = $floor;
    }
}

$house = new House('102 rue des noyers', 350000.00, 120, 2);
echo $house->getAddress().'<br>';
$flat = new Flat('45 rue de la république', 150000, 30, 3);
echo $flat->getFloor();