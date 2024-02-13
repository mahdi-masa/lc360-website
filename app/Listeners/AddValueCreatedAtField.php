<?php

namespace App\Listeners;

use Statamic\Events\EntryCreating;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class AddValueCreatedAtField
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(EntryCreating $event): void
    {   
        $entry = $event->entry;
        $current = Carbon::now()->timestamp;
        $entry->set('createdAt', $current);
        
    }
}
