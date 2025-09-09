<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use Illuminate\Support\Facades\File;

class AddImagesToProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $imageDirectory = resource_path('images/products');
        $images = File::files($imageDirectory);

        foreach ($images as $image) {
            
            $imageName = $image->getFilename();
            $productId = (int) str_replace('.jpg', '', $imageName);
            $product = Product::find($productId);
            if ($product) {
                $product->image = 'images/products/'. $imageName;
                $product->save();
            }
        }
    }
}