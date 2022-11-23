1. Tomen los siguientes puntos a considerar
    1. Un usuario tiene muchas conversaciones
    2. Un usuario es participante de muchas conversaciones
    3. Un usuario envia muchos mensajes
    4. Una conversacion tiene muchos participantes
    5. Una conversacion tiene muchos mensajes
3. Deberan existir las siguientes rutas con sus respectivos verbos
    1. /api/v1/conversations
        1. Esta ruta debe estar protegida
        2. Debera mostrar las conversaciones del usuario loggeado
        3. Podras crear conversaciones nuevas
    2. /api/v1/conversations/:conversation_id
        1. Esta ruta debe estar protegida
        2. Debera mostrar una conversacion en especifico
        3. La podras eliminar y modificar desde aqui
    3. /api/v1/conversations/:conversation_id/messages
        1. Esta ruta debe estar protegida
        2. Mostrara todos los mensajes que tiene la conversacion
        3. Permitira crear nuevos mensajes
        
    4. /api/v1/conversations/:conversation_id/messages/:message_id
        1. Esta ruta debe estar protegida
        2. Mostrara un mensaje en especifico
        3. Permitira eliminarlo, pero no modificarlo
    
    <aside>
    💡 Opcionales
    
    1. /api/v1/conversations/:conversation_id/participants
        1. Esta ruta debe estar protegida
        2. Mostrara los participantes de la conversacion
        3. Permitira agregar nuevos participantes a la conversacion
        
    2. /api/v1/conversations/:conversation_id/participants/:participant_id
        1. Esta ruta debe estar protegida
        2. Mostrara un participante en especifico de la conversacion
        3. Permitira eliminar participantes de la conversacion
    </aside>