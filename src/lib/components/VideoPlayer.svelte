<script lang="ts">
    import 'vidstack/bundle';

    interface Props {
        src: string;
        title: string;
        thumbnails: string;
    }

    let { title, src, thumbnails }: Props = $props();


</script>


<media-player title={title} src={src} playsInline>
    <media-provider></media-provider>
    <media-plyr-layout thumbnails={thumbnails}></media-plyr-layout>
</media-player>
