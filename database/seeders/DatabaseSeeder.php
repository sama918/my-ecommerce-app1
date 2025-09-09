<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {   User::factory(10)->create();
        Product::factory(20)->create()->each(function ($product) {
            // Copiez une image de storage/app/public/images/products vers public/images/products
            $imagePath = 'images/products/' . $product->id . '.jpg'; // Par exemple, en utilisant l'ID du produit comme nom de fichier
            Storage::copy('public/images/products/' . $product->id . '.jpg', 'public/' . $imagePath);

            // Mettez à jour la colonne image du produit avec le chemin d'image
            $product->update(['image' => $imagePath]);
        });
        Category::factory(5)->create();

        $categories= Category::all();
        Product::all()->each(function($product) use ($categories){
            $product->categories()->attach(
                $categories->random(2)->pluck('id')->toArray()
            );
        });
    }
}
